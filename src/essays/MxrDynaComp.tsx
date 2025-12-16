
/*
 *   Copyright (c) 2025 Robin E. R. Davies
 *   All rights reserved.

 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *  Text content is dual-licensed under CC BY 4.0 SA, or MIT license, whichever you 
 *  find more convenient. 
 */


import BlogPage from '../BlogPage';
import CopyrightSlug from '../Copyrightslug';


const styles = {
    floatImageRight: {display: "block", float: "right", marginTop: 16, marginLeft: 32, marginBottom: 32, width: 320, maxWidth: "50%" },
    
    grid2Col: {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "16px",
        marginTop: "24px"
    },
    centeredImage: {
        display: "block",
        marginTop: 32,
        marginBottom: 0,
        maxWidth: "100%"
    },
    imageCaption: {
        textAlign: "center" as const
    },
    table: {
        fontSize: "1.0rem",
        marginTop: "24px",
        marginLeft: 24,
        marginBottom: "24px",
        borderCollapse: "collapse" as const,
        borderTop: "1px solid black",
        borderBottom: "1px solid black"
    },
    thead: {
        borderBottom: "1px solid black"
    },
    tableHeader: {
        textAlign: "left" as const,
        paddingRight: "24px",
        paddingLeft: 8,
        paddingBottom: "4px",
    },
    tableCell: {
        paddingRight: "24px",
        paddingTop: "4px",
        paddingLeft: 8,
        paddingBottom: "4px"
    },
    tableCellBorder: {
        borderBottom: "1px #C0C0C0 solid"
    },
    tableCellLastRow: {
        borderBottom: "1px solid rgba(0, 0, 0, 0.58)"
    },
    tableLegend: {
        marginLeft: 64
    },
    imageLink: {
        display: "flex",
        justifyContent: "center"
    }
} as const;



export default function MxrDynaComp() {

    const route = "/MxrDynaComp";

    return (
        <BlogPage route={route}>
            <img src="./thumb/DynaCompThumb.jpg" style={ styles.floatImageRight } />
            <p>
                The MXR Dyna Comp is a classic 1970s compressor pedal, highly prized by guitarists and collectors. Unlike many compressors,
                The effect is based around an OTA (Operational Transconductance Amplifier) rather than an op amp or photo-diode,
                giving it a distinctive sound that OTA-based compressors are known for.
            </p>
            <p>This analysis focuses on how the circuit works at a component level, but it also attempts to draw 
                conclusions about the overall behavior of the pedal when used by guitarist, in order to 
                provide insight into how to use the pedal more effectively.
            </p>
            <p>
                Non-technical readers are encouraged to enjoy the pretty pictures found along the way, 
                and dwell lightly on the deep descriptions of how the circuit is implemented at the component level.
                As it progresses, the analysis will provide insights into the high-level behavior of the pedal that 
                are not adequately documented in the owners' manual (what does that Sensitivity knob really do, for example). 
                In the final section of the analysis, there is a discussion of what exactly makes the 
                Dyna Comp different and distinct from similar guitar pedal compressors, along with a discussion of 
                what the Dyna Comp sound actually is that is based upon analysis rather than subjective descriptions, 
                which the author hopes non-technical users may also find interesting and useful. 
            </p>
            <p>This analysis is based on circuit analysis perform using LTSpice simulations of the MXR Dyna Comp circuitry. A link to the 
                LTSpice model file is provided in the references section.
            </p>
            <h2>Circuit Overview</h2>
            <p>The circuit can be separated into several functional blocks, each responsible for a specific aspect of the compression effect. Each of this blocks will be
                analyzed in more detail below.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "16px", marginTop: "24px" }}>
                <div><strong>Power supply:</strong></div>
                <div>Provides power rails for the rest of the circuit.</div>

                <div><strong>Input buffer:</strong></div>
                <div>Conditions the incoming guitar signal.</div>

                <div><strong>Transconductance amp:</strong></div>
                <div>Applies the compressor envelope gain to the incoming signal.</div>
                <div><strong>Envelope generator:</strong></div>
                <div>Generates a current signal which controls gain of the transconductance amplifier, in order to compress the input signal.</div>
                <div><strong>Output:</strong></div>
                <div>The actual output signal is generated by tapping the output of transistor Q3 in the Envelope Generator section.
                    The output then applies the Volume control pot to the final effect output.</div>
            </div>
            <div>
                <a href="./img/DynaCompSchematic.svg" target="_blank" rel="noopener noreferrer">
                    <img src="./img/DynaCompSchematic.svg" style={{ display: "block", marginTop: 32, marginBottom: 0, maxWidth: "100%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 1: Schematic of the MXR Dyna Comp circuit.</p>
            </div>

            <h2>Signal Volume Measurements Conventions</h2>
            <p>By industry convention, 
                the voltage level of guitar signals from an electric guitar pickup are measured in units of dBu, which is an RMS
                measurement of voltage given in decibels, relative to a reference voltage of 0.775 volts RMS. At various points in the analysis, it
                will be more useful to use a non-RMS peak-to-peak measurement of signal volume. These measurements will be stated in units of "dBV(pp)",
                defined as the peak-to-peak, non RMS voltage of a signal given in decibels relative to a signal of 1 Volt peak to peak.
            </p>
            <p>Converting between RMS and peak-to-peak measures is perilous. The conversion depends on the nature of the
                waveform being measured, and potentially depends on both harmonic magnitude and phase of the signal content.
            </p>
            <p>For reference, the following conversions are valid for the purpose of this document:</p>
            <table style={styles.table}>
                <thead style={styles.thead}>
                    <tr>
                        <th style={styles.tableHeader}>Waveform</th>
                        <th style={styles.tableHeader}>0dBu</th>
                        <th style={{ ...styles.tableHeader, paddingRight: 0 }}>0dbV(pp)</th>
                    </tr> </thead>
                <tbody>
                    <tr style={styles.tableCellBorder}>
                        <td style={styles.tableCell}>Sin</td>
                        <td style={styles.tableCell}>= 2.2dbV(pp)</td>
                        <td style={styles.tableCell}>= -2.2dBu</td>
                    </tr>
                    <tr>
                        <td style={styles.tableCell}>Square</td>
                        <td style={styles.tableCell}>= 3.0dbV(pp)</td>
                        <td style={styles.tableCell}>= -3.0dBu</td>
                    </tr>
                </tbody>
            </table> 
            <p style={styles.tableLegend}>
                Table 1: Conversion between dBu and dBV(pp) for common waveforms.
            </p>
            <p>
                Pickup voltage levels vary from guitar to guitar, and pickup to pickup. However, the following table 
                gives some typical voltage levels for common pickup types, measured in both dBu and dbV(pp). The MXR Dyna Comp 
                is conspicuously missing an input volume control. Instead, it just assumes that the voltage of the input signal will be 
                in the range of the output of an electric guitar.  Since compressors are usually placed first in an effect chain, 
                guitarists an adjust volumes by using the volume control on their guitar, if they must.</p>
            <p>
                This is perfectly reasonable, save for the fact that voltages 
                vary considerably between pickups, and pickup type. There is a significant difference voltage levels coming from 
                a modern humbucker pickup, and a vintage telecaster pickup. This will prove to be important later in the 
                analysis, when the issue of envelope release points is discussed.
            </p>
            <p>
                As a point of reference, the following table gives voltage output levels for various types of pickups. 
                Theses are just rough guidelines. Actual voltages will vary considerably between different pickup models.
            </p>


            <table style={styles.table}>
                <thead style={styles.thead}>
                    <tr>
                        <th style={styles.tableHeader}>Pickup<br/> Type</th>
                        <th style={styles.tableHeader}>Attack<br/> (dBu)</th>
                        <th style={styles.tableHeader}>Attack<br/> (dbV(pp))</th>
                        <th style={styles.tableHeader}>Sustained<br/> (dBu)</th>
                        <th style={{ ...styles.tableHeader, paddingRight: 0 }}>Sustained<br/> (dbV(pp))</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={styles.tableCellBorder}>
                        <td style={styles.tableCell}>Vintage Single-Coil</td>
                        <td style={styles.tableCell}>-8 to<br/>-4 dBu</td>
                        <td style={styles.tableCell}>-6 to<br/>-2 dbV(pp)</td>
                        <td style={styles.tableCell}>-18 to<br/>-14 dBu</td>
                        <td style={styles.tableCell}>-16 to<br/>-12 dbV(pp)</td>
                    </tr>
                    <tr style={styles.tableCellBorder}>
                        <td style={styles.tableCell}>Modern Single-Coil</td>
                        <td style={styles.tableCell}>-4 to<br/>0 dBu</td>
                        <td style={styles.tableCell}>-2 to<br/>+2 dbV(pp)</td>
                        <td style={styles.tableCell}>-14 to<br/>-10 dBu</td>
                        <td style={styles.tableCell}>-12 to<br/>-8 dbV(pp)</td>
                    </tr>
                    <tr style={styles.tableCellBorder}>
                        <td style={styles.tableCell}>Humbucker</td>
                        <td style={styles.tableCell}>0 to<br/>+4 dBu</td>
                        <td style={styles.tableCell}>+2 to<br/>+6 dbV(pp)</td>
                        <td style={styles.tableCell}>-10 to<br/>-6 dBu</td>
                        <td style={styles.tableCell}>-8 to<br/>-4 dbV(pp)</td>
                    </tr>
                    <tr>
                        <td style={styles.tableCell}>Active Pickup</td>
                        <td style={styles.tableCell}>+4 to<br/>+8 dBu</td>
                        <td style={styles.tableCell}>+6 to<br/>+10 dbV(pp)</td>
                        <td style={styles.tableCell}>-6 to<br/>-2 dBu</td>
                        <td style={styles.tableCell}>-4 to<br/>0 dbV(pp)</td>
                    </tr>
                </tbody>
            </table>
            <p style={styles.tableLegend}>
                Table 2: Typical signal input levels, by pickup type.
            </p>


            <h2>Power Supply</h2>
            <div>
                <a href="./img/DynaCompSchematicPs.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/DynaCompSchematicPs.svg" style={{ marginTop: 32, marginBottom: 0, width: 500, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 2: Schematic of the power supply block.</p>
            </div>
            <p>The power supply block does basic conditioning of input from the 9V battery (which actually supplies 8.5V or less).
            </p>
            <p>Diode D3 provides protection against reverse connection of the battery. R2 and R17 are a voltage divider that generates
                a 2.54V power rail which is  used to provide a bias voltage to transistors. Capacitors C6 and C11 ensures that power comes up
                safely and smoothly when a battery is first connected.</p>
            <h2>Input Buffer</h2>
            <div>
                <a href="./img/DynaCompSchematicBuffer.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/DynaCompSchematicBuffer.svg" style={{ marginTop: 32, marginBottom: 0, width: 500, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 3: Schematic of the input buffer block.</p>
            </div>
            <p>The input buffer block provides a standard high-impedance input buffer for the guitar signal, ensuring
                minimal loading on the guitar pickups.</p>
            <p>C2, R7 and R5 provide a high-pass filter to remove DC offset and low-frequency noise from the input signal. Together, they
                provide a high-pass (or a low-cut) filter  with a 36Hz cutoff frequency.
            </p>

            <h2>Transconductance Amplifier</h2>
            <div>
                <a href="./img/DynaCompSchematicTa.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/DynaCompSchematicTa.svg" style={{ marginTop: 32, marginBottom: 0, width: 800, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 4: Schematic of the transconductance amplifier block</p>
            </div>

            <p>The transconductance amplifier block modifies the gain of the input signal under control of
                a feedback signal provided by the Envelope Generator block through the <em>gmod</em> connection.
            </p>
            <p>The heart of this block is the CA3080 Operational Transconductance Amplifier (OTA).
                At OTA is similar in concept to an op-amp, but instead of providing a voltage output, it provides a current output proportional to the input voltage,
                multiplied by the current flowing into its <em>abc</em> pin. The gain of the differential input voltage is controlled by the <em>gmod</em> current signal on the schematic.
                The output of the OTA is equal to
            </p>
            <p style={{ marginLeft: 64 }}>
                Iout = G<sub>m</sub> * (V+ - V-)
            </p>
            <p>
                where G<sub>m</sub> is proportional to input current on the <em>abc</em> pin.
            </p>
            <p>
                The CA3080 is no longer in production, and is available only as NOS. However, a commonly used substitute is the LM13700, which is
                not pin-compatible, but is, apparently, otherwise almost an exact for the CA3080. The LM13700 has better linearity
                over a wider range of input voltages, but an be degraded to match the linearity of the CA3080 by disconnecting the 
                Diode Bias pin (pin 2). The Ross Compressor (another famous and highly-prized OTA-based compressor),
                and many rebuilds of the MXR Dyna Comp uses the TI LM13700 instead of a CA3080.
            </p>
            <p>
                The OTA's transconductance is controlled by the current flowing into its <em>abc</em> pin, which is
                connected to the <em>gmod</em> input connection on the schematic, coming from the Envelope Generator block.
                Somewhat unintuitively, the CA3080 keeps the voltage of the Iabc pin at a constant
                voltage of slightly under 1.4V, so it's important to remember that it is the current flowing through <em>gmod</em>, not
                the voltage that controls the gain of the OTA. 1.4V happens to be two transistor bias drops, which probably
                accounts for the acronym: "abc" = "amplifier bias current", which perhaps encompasses the idea that the
                pin provides current control at an a internal amplifier bias voltage level. 
            </p>
            <p>Instead of using a phase splitter, a passive resistor/capacitor network applies a high-pass filter to the V+ input of the
                CA3080. The difference between the filtered V+ signal, and the unfiltered V- signal then provides the differential
                input to the OTA. In the process, the 1dBU voltage swing of the guitar input is converted to a range of about +/-50mV for a 1kHz
                input signal across the differential inputs of the OTA, which puts the differential voltage in a range where
                the OTA can operate linearly without significant distortion across several decades of magnitude.
            </p>
            <p>In the discussion that immediately follows, small-signal frequency response analysis is conducted by temporarily
                connecting the <em>abc</em> to a constant 0.6&micron;A current source, which effectively disables the envelope generator.
                Because <em>gmod</em> varies over time, it is impossible to do a meaningful small-signal static AC analysis of 
                frequency response unless the envelope generator is temporarily disabled. Transient analysis of the spectral response of the circuit, 
                with the envelope generator connected, will be deferred until later in the analysis.
            </p>
            <p>Figures 5 through 7 show small-signal frequency responses for signals going into and out of the OTA. Responses are
                measured relative to the V(Vin) guitar input, so they include the low-cut filter applied in the input buffer block.
            </p>
            <div>
                <a href="./img/DynaComp_spec_ota_pos.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/DynaComp_spec_ota_pos.svg" style={{ marginTop: 32, marginBottom: 0, width: 800, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 5: Small signal response, guitar input to the ota_pos input of the CA3080. Signal going to 
                    the ota_neg input is not filtered (although both inputs inherit the low-cut filter from the input block. The filter network 
                    before ota_pos applies a high-cut (low-pass) filter at about 10KHz.
                </p>
            </div>
            <p>More interesting is the frequency response of the difference between the V+ and V- inputs, which is the actual input to the OTA.</p>
            <div>
                <a href="./img/DynaComp_spec_ota_diff.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/DynaComp_spec_ota_diff.svg" style={{ marginTop: 32, marginBottom: 0, width: 800, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 6: Small signal response of V(ota_pos) minus V(ota_neg).</p>
            </div>
            <p>The net result of passive filters before the CA3080 is to apply a massive 15dB+ high-frequency boost to the signal
                being fed to the OTA, and an additional low cut in addition to the input buffer filter, that brings the effective low-cut 
                cutoff frequency up to about 60Hz.
            </p>
            <div>
                <a href="./img/DynaComp_spec_ota_out.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/DynaComp_spec_ota_out.svg" style={{ marginTop: 32, marginBottom: 0, width: 800, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 7: Small signal frequency response of the voltage at the output of the OTA (envelope generator disabled).</p>
            </div>
            <p>
                The C1/R6 network adds a voltage bias to the current output of the OTA for transistor Q2 that follows in the Envelope
                Generator block, while also applying a high-cut filter with an Fc of about 8.5khz. The effect of this high-cut filter is
                to substantially remove the high-frequency boost on the voltage signal at <em>ota_out</em> (see Figure 7).
                The current output, <em>I(ota_out)</em>, is a linear function of the frequency response of <em>V(ota_pos)-V(ota_neg)</em>, and therefore
                produces the same frequency response curve as shown in Figure 6, including the high-frequency boost.
            </p>
            <p>Taken together, the actual purpose of the filter networks before and after the OTA becomes clear. They provide
                passive conversion of the OTA's output current signal to a voltage signal (with a low cut applied at a cutoff frequency of about 8.5kHz), 
                which would normally require an active integrator circuit of some sort. The OTA does provide a convenient way to apply the compressor envelope  gain to the input 
                signal via the <em>abc</em> pin. But, ironically, it produces an
                inconvenient current output, since the transistor that follows (Q3) in the Envelope Generator section needs a voltage signal at its base.
                With the C1/R6 filter network applied, the current on the connection between the OTA and the following transistor
                faithfully replicates the frequency boost of the OTA differential voltage input; but the voltage carries a
                a signal without the frequency boost&mdash;in fact, it applies an 8.5kHz high-cut instead. 
            </p>
            <p> When the envelope generator is connected,
                during normal circuit operation, the frequency response at <em>ota_out</em> is considerably more complicated. The
                frequency response is no longer linear, because it depends on <em>gmod</em> which is varying over time,
                and, depending on value of the Sensitivity control,  and signal input strength.
                When the Sensitivity knob is set to less than 0.5, the OTA operates almost entirely within the linear range of the OTA amplifier. But the 
                OTA does occasionally clip during transient picking attacks. Clipping behavior in the OTA will be analyzed in more detail, after we have complete 
                analysis of the compression envelope generator. 
                When the OT is operating in this more-or-less linear response range,
                the frequency response of the circuit end to end follows the frequency response curve shown in Figure 7: a slightly dark tone with
                a low cut at about 60hz, a high cut at about 8.5kHz, and flat response between the two cutoff frequencies.
            </p>
            <p>The TRIM pot is used to adjust the balance of the V+ and V- inputs to the OTA. The official
                position of MXR/Dunlop is that the TRIM pot should always be set to mid-position. There is some internet
                lore of unknown provenance that suggest that the TRIM pot should be adjusted until the voltage across R14 is
                zero with 0V input; however, this seems unlikely to be correct, or advisable.
            </p>
            <h2>Envelope Generator</h2>
            <div>
                <a href="./img/DynaCompSchematicEg.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/DynaCompSchematicEg.svg" style={{ marginTop: 32, marginBottom: 0, width: 800, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 8: Envelope generator block</p>
            </div>
            <p>The envelope generator block is responsible for generating the the signal that controls the compressor envelope gain. The control signal is 
                sent ack to the OTA amplifier section via the <em>gmod</em> connection.</p>
            <p>
                Transistor Q3 is a phase splitter, which provides both inverted and non-inverted outputs of the signal coming from the
                transconductance amplifier. Output voltages will not carry the high-frequency boost; but (by inspection) output
                currents from the transistor do.
            </p>
            <p>The key to understanding how the envelope generator block works is to recognize that the Q4 and Q5 transistors are operating mostly reverse-biased.
                When the voltage at the base of Q4 or Q5 exceeds the bias point (which occurs very briefly in normal operation), the transistors
                open and allow charge to  drain from the C5 capacitor to ground via the Q4 and Q5 transistors.
            </p>
            <p>The charge on the C5 capacitor constitutes the state of the envelope generator. When the Dyna Comp powers up, C5 will start
                consuming current from Vs through R3 until the voltage across C5 reaches Vs (~+8.5V), at which point, the voltage at <em>env_c</em> will
                also be +8.5V.
            </p>
            <p>
                Let's examine the circuitry around <em>det_p</em> first. Capacitor C4 is a DC blocker. The voltage on the det_p will have a DC offset of zero volts. When <em>Vin</em> (the guitar input signal) is zero,
                then <em>det_p</em> will be at zero volts as well. Since this is below the bias voltage of Q5 (about +0.7V), Q5 will
                be reverse biased, and current cannot flow through transistor Q5. When the <em>V(det_P</em> exceeds the bias voltage of
                Q5, then Q5 will start to conduct, causing the voltage of <em>det_p</em> to drop, and charge flows out of
                the C5 capacitor to ground via the Q5 transistor.
            </p>
            <p>
                The circuitry around <em>det_n</em> works in a similar manner, except it works on an inverted version of the input signal.
                Q4 and Q5 act as threshold detectors. C5 is allowed to discharge either when the voltage of the input signal exceeds +0.7V (through Q5),
                or when the voltage of the input signal is less than -0.7V (via Q4). This mechanism provides the attack of the compressor envelope. The rate at
                which C5 discharges determines how quickly the compressor attacks.
            </p>
            <p>
                When both Q5 and Q5 are non-conducting (when V(det_t) &lt; 0.7V, and V(det_p) &lt; 0.7V), C5 will start to charge again
                through R3 to Vs, which causes V(env_c) to rise back +8.5V. The charging rate determines the release rate of the compressor.
                In the absence of input signal, it takes about 1.5 seconds for the C5 capacitor to
                fully discharge, and thus for the compressor envelope to fully release.
            </p>
            <p>
                Diodes D1 and D2 provide protection for their respective Q5 and Q4 transistors, ensuring their base voltages do
                not fall below one diode drop below ground (about -0.6V in this case). Otherwise, they have no effect on
                signal output.
            </p>
            <p>Transistor Q2 acts as a buffer between <em>env_c</em> and the path to the Iabc pin of the OTA. The voltage at the emitter of Q2
                is more or less equal to the voltage at <em>env_c</em>; and the buffering provided by Q2 minimizes the current leaking
                from C5 to the OTA <em>abc</em> pin.</p>
            <p> The Sensitivity pot (U1) and R14 convert the voltage at the emitter of Q2 into current flowing into the <em>abc</em> pin of the OTA,
                which in turn, determines the gain of the OTA. A lower resistance at U1 causes more current to flow into the <em>abc</em> pin; higher resistance causes less
                current to flow into the <em>abc</em> pin.
            </p>
            <p>
                Considering the system in total, the feedback loop to the OTA via <em>gmod</em> is responsible for compressing the input signal. The system works
                to ensure that the gain of the OTA is adjusted such that the peak voltages at <em>det_p</em> and <em>det_n</em>
                are hovering around the value where Q5 and/or Q4 start conducting. As the input voltage varies, the envelope
                detector works to keep the gain of the OTA at the point where the input signal with envelope applied keeps the maximum
                and minimum voltages being applied to Q4 and Q5  close to their bias points.
                The signal is boosted to the threshold voltage levels after which the volume of the output will not increase any further.</p>
                <p>As the envelope generator attacks, voltage drops, which reduces I(abc) current of the OTA, which reduces the gain of the OTA. When releasing, 
                    voltage rises at the emitter of Q2, which increases the I(abc) current of the OTA, which increases the gain of the OTA. Keep in mind that 
                    the sense of the compression envelope is the opposite of that of an ADSR envelope: when the envelope attacks, it reduces the gain of the input 
                    signal until it comes to constant level. When the input volume decreases, the envelope gain increases in order to keep the output 
                    signal at a sustained level. 
                </p>
            <p> Once C5 has fully discharged, and <em>det_c</em> has returned to +8.5V,
                the gain of the OTA can no longer be increased. So, subsequent decreases in signal level will not increase the compressor gain any further. This determines 
                the threshold of the compressor.</p>

            <p>
                However, because it takes a long time for C5 to discharge (about 2 seconds), in practice, when playing, the compressor envelope will almost always be partially engaged while playing.
            </p>
            <p>Figure 9 shows how this all works together to produce a compression envelope.</p>
            <div>
                <a href="./img/CapacitorCharging.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/CapacitorCharging.svg" style={{ marginTop: 32, marginBottom: 0, width: 800, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 9: Operation of the envelope generator.</p>
            </div>
            <p>Figure 9(a) shows the input signal fed into the circuit simulation. In this case, a 1kHz pulse at 0.5dBU. 9(b) shows the voltage at <em>det_p</em>.
                Clipping at the bottom of V(det_p) indicates the point at which diode D1 has begun to conduct and dump voltage to ground. Clipping at the
                top of <em>det_p</em> indicates the point at which Q5 has started to open up and dump current from the C5 capacitor. 9(c) shows the current
                passing from capacitor C5 to ground via Q5 when when V(dept_p) reaches the 0.7V transistor bias point.  9(d) indicates how the voltage at <em>env_c</em> decreases as capacitor C5 discharges. 
                Note that Q4 is doing the same thing, but with an inverted signal of opposite phase, so steps are visible on the V(env_c) curve as Q4 and Q5 take turns
                dumping charge from C5.
            </p>
            <p>The potentiometer U1 (Sensitivity) and R14 convert the voltage at the emitter of Q2 to a current signal, which controls the gain of the OTA. The 
                effect of the Sensitivity pot will be analyzed in detail in  a subsequent section.
            </p>

            <h2>Output Stage</h2>
            <p>A compressed signal is taken from the output of transistor Q3 in the envelope generator block, just before it is fed into the negative envelope detector. Current
                flowing through this path causes a slight reduction in magnitude of the signal at <em>V(det_n)</em>, but this effect is negligible. The practical consequence is that
                it means that usually it is Q5 which is sitting exactly at its bias point, while Q4 is slightly below its bias point
                when the envelope is fully attacked; but this is a point of curiosity rather than a practical concern.
            </p>
            <p>The output signal is then passed through a high-pass filter formed by R12 and C8, which act as a DC blocker.
                The small signal frequency response of the signal after the DC blocker is the sames as
                show in figure 7, but with one additional DC blocker applied.
            </p>
            <p>The audio-tapered Output pot (U2) provides a simple passive volume control circuit which divides the final compressed signal by the effective resistances of the U2 pot.
            </p>

            <h2>Compression Envelope Behavior</h2>
            <p>
                The Sensitivity pot (U1) controls how much the envelope generator affects the OTA gain.
            </p>
            <div>
                <a href="./img/DynaComp_env_attack_stepped.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/DynaComp_env_attack_stepped.svg" style={{ marginTop: 32, marginBottom: 0, width: 800, maxWidth: "80%" }} /> 
                </a>
                <p style={{ textAlign: "center" }}>Figure 10: Effect of the Sensitivity pot 
                    on envelope attack. Input consists of a pulsed 480Hz sin wave at -12dbV(pp) or -9.8dBu. Panel (a) shows current 
                    input to the OTA abc pin. Panel (b) shows the effect OTA gain in dB relative to 
                    the envelope sustain point.</p>
            </div>
            <div>
                <a href="./img/DynaComp_env_release_stepped.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/DynaComp_env_release_stepped.svg" style={{ marginTop: 32, marginBottom: 0, width: 800, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 11: Effect of the Sensitivity pot on envelope release.</p>
            </div>
            <p>Figure 10 shows how the gain of the OTA changes as the Sensitivity pot is adjusted during the attack of a 1kHz sin wave pulse
                with a signal level of -12dBV(pp) (-9.8dBu). The attack of the compressor is visible as the gain of the OTA (controlled by <em>I(abc)</em>)drops over time. The gain of the
                 OTA is directly linearly proportional to the current flowing into the OTA's IAbc pin. For each of the settings, the 
                 attack time of the envelope is about 12ms, although this varies with the Sensitivity pot setting. For the given input, I(abc) eventually 
                 settles at about 6µA, at which point, the envelope has fully attacked.
                The actual settling point of I(abc) and the OTA gain varies depending on the voltage range (peak to peak) of the input signal; but regardless of the input 
                signal level, the envelope generator will settle at a point where the final output of the effect is a consistent 0.3V, or about -4.4dbV(pp) (-7.6dBu), 
                when the Volume pot is set to 1.0. The implication of this is that the Dyna Comp compressor has a compression ration of zero: it will 
                always seek to a constant output volume when playing sustained notes, as long as the envelope generator is engaged. As a result, 
                variations of expressive dynamics in the input are completely eliminated in the output signal. This occurs regardless of the setting 
                of the Sensitivity pot.
            </p>
            <p>The general effect of the compressor attack is that, when presented with a transient increase in volume, the output voltage 
                will increase before the envelope generator has a chance to compensate, and then the output signal level will decay back to 0.3V 
                as the envelope generator catches up.  As a consequence, the OTA can and will be driven into overdrive and temporary clipping, 
                particularly when sensitivity settings are high, and the envelope generator has substantially release back to maximum gain. Clipping behavior 
                of the OTA in response to input volume spikes will be examined later on. The point at which the OTA current output clips, roughly corresponds 
                to an output signal level of +/-2V (about +7dBV(pp) or +4dBu). Technically, this is overvoltage for a standard Hi-Z effect or amplifier input,
                so downstream effects and amplifiers may further clip the output signal of the Dyna Comp when this occurs. 
            </p>
            <p> 
                Attack times do vary depending on the value of the Sensitivity pot, but for all sensitivity values, the envelope attack has substantially 
                completed about 9ms after onset of the initial input signal. 
            </p>
            <p>
                Figure 11 shows the behavior of the compression envelope when releasing. The release time is very long&mdash;it takes about 2 seconds 
                for the envelope to generator to fully release. In the example shown in Figure 11, the envelope generator has only released about 1/4 of the 
                way back to idle state when the next sin pulse arrives, 500ms later. 
                The practical implication of this is that, when a guitarist plays a musical phrase, the gain excursion of the compressor envelope during picking attacks in the middle of the phrase will 
                be considerably less than the initial gain excursion from fully-idle state. 
            </p>
            <p>
                The threshold of a compressor is the signal level below which the compressor will no longer compress input signals. For the Dyna Comp
                the compressor threshold occurs when capacitor C5 has fully discharged, and the output of the envelope generator sits at +8.5V. 
                At this point, OTA gain can no longer be increased, and the compressor is fully released. 
            </p>
            <p>The envelope threshold varies by Sensitivity value. It can be inferred by reading off the maximum gain levels on the left side of 
                if figure 10 (b). The test signal used to generate Figure 10 (b) has a volume level of -12dBV(pp). Conveniently, voltage of the 
                output signal, with the envelope fully attacked is 0.3dBV(pp)&mdash;close enough to unity gain for the back-of-the-envelope 
                calculations that follow. Because the maximum gain is +32dB when Sensitivity is set to 1.0, we can infer that the 
                corresponding threshold is -32dB lower than the test input signal, which would be (-12dBV-32db) = -44dBV(pp), or about -41dBu.
            </p>
            <p>Similar calculations for other Sensitivity values give threshold values by Sensitivity settings, the results of which are given in Table 3.</p>
            <table>
                <thead style={styles.thead}>
                    <tr>
                        <th style={styles.thead}>Sensitivity</th>
                        <th style={styles.thead}>Maximum Gain</th>
                        <th style={styles.thead}>Envelope Threshold</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={styles.tableCellBorder}>
                        <td style={styles.tableCell}>0</td>
                        <td style={styles.tableCell}>5dB</td>
                        <td style={styles.tableCell}>-17dBV(pp) (-14dBu)</td>
                    </tr>
                    <tr style={styles.tableCellBorder}>
                        <td style={styles.tableCell}>0.25</td>
                        <td style={styles.tableCell}>10dB</td>
                        <td style={styles.tableCell}>-22dBV(pp) (-19dBu)</td>
                    </tr>
                    <tr style={styles.tableCellBorder}>
                        <td style={styles.tableCell}>0.5</td>
                        <td style={styles.tableCell}>20dB</td>
                        <td style={styles.tableCell}>-32dBV(pp) (-29dBu)</td>
                    </tr>
                    <tr style={styles.tableCellBorder}>
                        <td style={styles.tableCell}>0.75</td>
                        <td style={styles.tableCell}>25dB</td>
                        <td style={styles.tableCell}>-37dBV(pp) (-34dBu)</td>
                    </tr>
                    <tr>
                        <td style={styles.tableCell}>1.0</td>
                        <td style={styles.tableCell}>32dB</td>
                        <td style={styles.tableCell}>-44dBV(pp) (-41dBu)</td>
                    </tr>
                </tbody>
            </table>
            <p style={styles.tableLegend}>
                    Table 3: Approximate envelope thresholds by Sensitivity.
            </p>
            <p>Table 3 figures are very approximate. 
                Simulations were performed with an ideal C-Taper pot for the Sensitivity knob. In physical devices, the C-Taper pot is more 
                likely a 2-segment approximation of an ideal taper. So while the range of thresholds is accurate,
                intermediate threshold values should be considered very approximate indeed.
            </p>
            <p>The envelope threshold when Sensitivity is set to 1.0 is generous, and may actually exceed the 
                noise floor on particularly noisy guitar input signals. The envelope threshold when Sensitivity is 0.0, however, 
                is fairly thin. When comparing voltage input levels by pickup type, given in Table 2, it 
                seems that input voltage levels for single-coil pickups may be too low to meaningfully trigger 
                the compression envelope, when Sensitivity is at a minimum value. Single-coil pickups will typically 
                need higher Sensitivity settings to get compression comparable to a guitar with a humbucker pickup.
            </p>
            <p>The general effect of the compressor attack is that, when presented with a transient volume spike in the input signal, 
                the output signal will spike upward above 0.3V, and then decay back to 0.3V as the envelope generator catches up (Volume set to 1.0). 
            </p>
            <p>
                With the Sensitivity pot set to 1.0, and with the compression envelope fully released, the OTA has a gain of about 32dB relative to the gain 
                when the compression envelope has fully attacked. There will, therefore be a significant jump in output volume at the moment the 
                transient begins. Typically, from envelope-idle state, this causes the OTA to clip almost immediately. As the envelope generator starts to 
                engage, the gain of the OTA drops toward the final sustained level, applying  a decay in the gain, and output volume over a period of about 
                12ms. This effect will be analyzed further in a subsequent section.
            </p>
            <p>When the Sensitivity pot is set below 0.5, the OTA seems to rarely, if ever, overdrive. And similarly, when the compression 
                envelope has not fully released, picking transients will not usually overdrive the OTA.
            </p>


            <p>When considered together, the following conclusions can be drawn about the effect of the Sensitivity pot. The Sensitivity pot scales the effect that 
                the envelope generator has on the gain of the OTA. Attack and release times remain more-or-less constant regardless of the Sensitivity 
                pot. The Sensitivity pot scales the voltage coming out of the envelope generator, and therefore scales the overall excursion of 
                the OTA gain. Increasing the Sensitivity pot decreases the envelope threshold, while also increasing the envelop attack and release rates. 
                Decreasing the Sensitivity pot increases the envelope threshold, while also decreasing the envelope attack and release rates. 
            </p>
        
            <h2>The Dyna in Dyna Comp?</h2>
            <p>As mentioned earlier, the Dyna Comp applies a significant high-frequency boost to the signal being fed into the OTA.
                This section examines the question of whether that boost contributes audible frequency-dependent effects 
                when the OTA clips. Intuitively, the OTA should be more likely to clip when present with high-frequency input signals. And this does, in fact 
                turn out to be the case.
            </p>
            <div>
                <a href="./img/TransientSweep.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/TransientSweep.svg" style={{ marginTop: 32, marginBottom: 0, width: 800, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 12: Magnitude response of a swept sin wave input signal, envelope generator enabled.</p>
            </div>

            <p>Figure 12 shows the the  behavior of the circuit from Vin to Vout when a swept sine wave is used as input. Note that this plot is not equivalent 
                in any way to a bode plot, and doesn't really say anything about frequency response. There is significant non-linear and time-dependent behavior at play, 
                so the plotted responses are not linearly additive as they should be in a bode plot. 
                What the plot does reveal, however, is frequency-dependent behavior in the overall circuit. The envelope generator 
                should keep gain constant across the at least the part of the swept signal between 100hz and 8.5kHz, and it does. But the plot 
                of I(abc), unexpectedly starts rising slightly above 1kHz. Input volume is constant; output volume is constant, but the OTA gain is not!
            </p>
            <p>
                Probing of the circuit reveals that I(abc) rises because the OTA starts to clip. (See Figure 13).
            </p>
            <div>
                <a href="./img/DynaComp_5kclipping.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                <img src="./img/DynaComp_5kclipping.svg" style={{ marginTop: 32, marginBottom: 0, width: 800, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 13: Circuit response to a 5kHz sustained sin wave (envelope fully attacked).</p>
            </div>
            <p>
                This may be just a passing curiosity. In practice, guitars will never produce such tones in isolation, so these oddities are unlikely to show up 
                directly, in actual playing conditions, at least
                for sustained tones. The range of fundamental frequencies in an actual guitar signal range from 87.44Hz (E1 fret 0) to 987.77Hz (E6 fret 20). Experimenting 
                with signals that have plausible overtone series seems to suggest that the phenomenon does not occur with realistic guitar signals. Even for a 
                signal that has been clipped before it enters the Dyn Comp, the envelope generator seems to lock in, substantially, on the magnitude of the fundamental harmonic, with overtones 
                not making enough of a contribution to drive the OTA into clipping. Nor is the effect observed when running simulations that use actual 
                recorded guitar signals as input.
            </p>
            <p>A more productive way to investigate the frequency response characteristics is to perform spectral analysis of transient analysis of output of the Dyna Comp 
                circuitry in response to non-swept signals.
            </p>
            <div>
                <a href="./img/DynaComp_clipping.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/DynaComp_clipping.svg" style={{ marginTop: 32, marginBottom: 0, width: 800, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 14: Clipping during onset of the compressor envelope. Input signal: 1kHz sin wave pulse at -12dBU, Sensitivity
                    at 0.5.</p>
            </div>

            <p>Figure 14 clearly shows the results of OTA clipping during an onset transient.
            </p>
                
            <p>
                The tonal effect of OTA clipping during picking transients is that the overall tone of picking attacks will be brightened, as clipping adds additional distortion product 
                overtones (none of which are inharmonic). This is not a bad thing at all. In fact it's a highly desirable effect, generally, because it imparts a sort 
                of edge-of-break-up brittleness to picking attacks that is very pleasant. Because the OTA is followed by an 8.5kHZ high-cut filter, the high-frequency boost that is generated by 
                clipping in the OTA is somewhat limited. There is plenty of room between the fundamental frequency of the guitar signal (or the dominant tone of 
                the pick attack), and the 8.5kHz high-cut of the following passive filter; so the picking attacks will brighten, but not to the sort of 
                make-your-ears-itch brightness that distortion products in the 8.5kHz+ range can produce. 
            </p>
            <p>
                As previously mentioned, when the OTA is clipping, the Dyna Comp will output overvoltage spikes in the output signal of up to +/- 2V. 
                These transient signals may cause further clipping in downstream amps and effects, which may be more dramatically audible than 
                those which the OTA introduces.
            </p>
            <div>
                <a href="./img/DynaComp_480_sin.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/DynaComp_480_sin.svg" style={{ marginTop: 32, marginBottom: 0, width: 800, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 15: Spectrum of a sustained -12dBU 480Hz sin wave, with the compression envelope fully attacked,
                    and <em>sensitivity_pos=1.0</em>.</p>
            </div>
            <p> Figure 15 shows the spectrum of a sustained 480Hz sin wave after the envelope has fully attacked. This provides insight into the harmonic 
                distortion of the circuit when playing sustained tones. Sidebands below -46dB are considered "excellent" THD; sidebands below -60dB are 
                considered "transparent". Informal descriptions of the tonal character of the Dyna Comp often describe it as being "warm"&dash;a term usually 
                reserved for describing the pleasant harmonic distortion that tube amps impart as they approach breakup, consisting primarily of additional perceptible even-order 
                harmonics. This is in fact, not the case, as the analysis shows. The actual tonal character of the Dyna Comp is closer to "transparent", and 
                doesn't really show any evidence of "warmth". 
            </p>
            <div>
                <a href="./img/DynaComp_480_square.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/DynaComp_480_square.svg" style={{ marginTop: 32, marginBottom: 0, width: 800, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 16: Spectrum of a sustained -12dBU 480Hz square wave with the compression envelope fully attacked,
                    and <em>sensitivity_pos=1.0</em>.Both input and output
                    signal are displayed. Spectra have been slightly offset during post-processing to allow side-by-side comparison. </p>
            </div>
            <p>
                Figure 16 shows the spectral response to a sustained 480Hz square wave. A square wave consists of a chain of odd-order harmonics, which we 
                can use to confirm prior static AC analysis of the Dyna Comp (with envelope generator disconnected). The spectra of the input and output signal 
                have been slightly shifted to allow side-by-side comparison. In the original simulation results, both data series have a fundamental at 480hz, 
                and overtone series that are multiples of 480hz, and thus overlay each other.
                </p>
                <p>
                The output signal (in red) shows added even-order harmonics which are not present in the input signal (in black). They mirror 2nd-order harmonic distortion
                seen in the sin wave analysis, and are virtually inaudible. Higher odd-order harmonics show the expected roll-off at 8.5kHz which 
                static AC analysis predicted. There are very slight discrepancies between the expected input and output harmonic magnitudes, which can 
                perhaps be attributed to interference between odd order harmonics in the original signal, and odd-order harmonics contributed by harmonic distortion 
                of the OTA. 
            </p>
            <p>
                The results of transient analysis largely confirm earlier small-signal AC analysis. For sustained tones, 
                the frequency response of the Dyna Comp circuit slightly darkens the input signal, with a low cut at about 30Hz, and a high cut at about 8.5kHz.
                Overall harmonic distortion of sustained tones, is negligible. The tonal character of sustained notes would better be characterized as "transparent", 
                not "warm".
            </p>

            <h2>Putting it All Together</h2>
            <div>
                <a href="./img/DynaComp_Live.svg" target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/DynaComp_Live.svg" style={{ marginTop: 32, marginBottom: 0, width: 800, maxWidth: "80%" }} />
                </a>
                <p style={{ textAlign: "center" }}>Figure 17: Simulation results with actual recorded guitar input.</p>
            </div>
            <p>
                Figure 17 shows the response of the Dyna Comp circuit when fed an actual recorded guitar signal. Panel (b) shows
                the gain of the OTA (I(abc)) in response to the input. Panel (c) shows the actual compressed output signal. (Sensitivity=1.0, Volume=1.0)
            </p>
            <p>
                There are several interesting features to note in Figure 17, most of which were identified in prior analysis. 
            </p>
            <p>
                The first is that dynamics (i.e. expressive variations in volume when playing the instrument) in the original signal during sustained
                portions of the input have been completely eliminated. The Dyna Comp circuitry has a compression ratio of zero. As expected sustained portions
                of the signal are brought up to a constant volume regardless of the amplitude of the corresponding input. 
            </p><p>
                Also interesting is that the dynamics of transients in the output signal do not actually reflect the dynamics of transients in the input signal, but
                instead reflect the ratio of the loudness of the transient to the loudness of the preceding sustained signal. 
            </p><p>
                For players who are running their effects chains or amps with significant overdrive, this doesn't really have significant consequences,
                because overdrive will kill any dynamics in the input signal anyway. It does mean that the Dyna Comp is unsuitable for use in musical contexts where some 
                preservation of dynamic expression is desired. But this is a more-or-less generic problem with compression anyway. 
            </p>
            <p>
                The Dyna Comp's compression is a bit of a sledgehammer,
                compared to more elaborate studio compressors which will allow non-zero compression ratios, in order to preserve 
                expressive dynamics. That being said, a typical compression ratio on a studio compressor applied to a guitar signal 
                would be often be around 11:1, which, while not completely eliminating dynamics, comes close enough to it that the 
                difference doesn't matter. And for many musical applications, having a compression ratio of zero is an advantage. 
                When there are downstream distortion/overdrive effects, or amplifiers, having a completely consistent output volume 
                helps to ensure that edge-of-breakup effects occur consistently. 
            </p>
            <p>
                Of particular interest  are the three large spikes that occur in the output signal during picking
                transients (at about 0.5s, 1.3s and 1.5s). Two of these spikes reach signal levels of 2V (outside of the displayed X-axis range), and all three indicate
                that the OTA has clipped on close examination. 
            </p>

            <p>By the standards of a studio compressor, the MXR Dyna Comp is a peculiar version of a compressor. It has
                a compression ratio of zero&mdash;compressed signals sustain at the same level, regardless of input level.
                And attack rates, release rates, and envelope threshold are all controlled by one single knob: the Sensitivity knob.
            </p>
            <p>And the lack of an input gain control seems puzzling, and remains unsettling, even when you realize 
                why it doesn't have to be there. In actual practice, guitarists can use the volume knob on their guitar to trim 
                input signals to the Dyna Comp, since it will almost always be the first effect in an effect chain.
                Single-coil pickups typically output lower signal levels than humbuckers, and may be -12dB quieter (or more).
                As a results, players who use single-coil pickups may need to turn up the Sensitivity pot a bit more than 
                players who use humbuckers. While this also changes attack and release rates, the single-coil players 
                probably have enough headroom to make necessary and appropriate adjustments to the envelope release threshold, as long as they 
                keep to higher Sensitivity settings. 
            </p>

            <h2>Conclusions</h2>
            <p>Despite its simplicity, the MXR Dyna Comp is a highly effective guitar compressor. It
                has been used on countless classic recordings.</p>
            <p> It is notoriously difficult to describe the tonal character of guitar effects pedals. 
                The Dyna Comp is variously described as having a "smooth" compression, a somewhat "dark" tonal 
                character, with an overall "warm" feel. Circuit analysis confirms some of those descriptions, and 
                refutes others. 
            </p>
            <p>Whether the compression effect is smooth or not is largely a matter of opinion. The Sensitivity control 
                provides limited control over the attack rates, release rates and threshold of the compression envelope. But it 
                does manage to provide reasonable and musical control over a compression effect that will be used strictly 
                for compressing guitar signals. The fact that the compression ratio is zero does make the effect somewhat 
                unusual, and doubtless contributes to its distinctive character.
            </p>
            <p>The tonal character is not "warm" at all, but is almost (but not quite) "transparent". </p>
            <p>The overall frequency response of the Dyna Comp applies a 10khz high cut, but is otherwise flat. This is indeed the 
                opposite of "bright". But it might be wiser to describe the frequency response as "mellow" rather than "dark" 
                in order to avoid confusions with the use of the term "dark" which has a slightly more complicated meaning in the 
                when applied to the sound of guitar amplifiers. 
            </p>
            <p>It is difficult to quantify or analyze the contribution of non-linear frequency response during transient attacks. There are no 
                good analytic tools to really investigate this in detail. The Dyna Comp does have non-linear response to picking attacks (although 
                it has mostly linear response for sustained tones). This is a good thing. However, clipping occurs inconsistently, 
                particularly when playing musical phrases, and seems to be of limited musical application, as a result. There is an affect. But it is 
                generally quite subtle in general use, except for the very first note of a musical phrase, whether the compression envelope 
                has released to mostly-idle state. It is possible that the Dyna Comp produces more dramatic effects on picking transients 
                for very bright picking noises, or for players who pick very hard. But we were unable to uncover examples of this 
                during simulation runs. Once again, the Dyna Comp seems to be mostly transparent. 
            </p>
            <p>In short, the Dyna Comp delivers pretty much what it promises: a capable and functional compressor effect, with a 
                musically meaningful (if not highly flexible) control of the compressor through a single Sensitivity knob, 
                a slightly mellow frequency response. It is by no means suitable for use in other musical compressor applications, 
                but does provide a compression effect that is useful specifically for processing guitar signals. The "OTA Compressor"
                sound, if there is such a thing, is attributable primarily to the somewhat somewhat unusual compression ratio, 
                and the fact that it delivers sensible, if not flexible attack and decay rates over the full range of the 
                single Sensitivity control.
            </p>
            <h2>References</h2>
            <ol>
                <li>"MXR Dyna Comp LtSpice Model". R. E. R. Davies. <a href="xxx">xxx add link</a>
                </li>
                <li>MXR Dyna Comp Factory Schematic.
                </li>
                <li>Texas Instruments. "CA3080, CA3080A Operational Transconductance Amplifiers." Datasheet. <a href="https://www.ti.com/lit/ds/symlink/ca3080.pdf">https://www.ti.com/lit/ds/symlink/ca3080.pdf</a> (accessed December 12, 2025)
                </li>
                <li>
                    "MXR Dyna Comp Analysis." ElectroSmash. <a href="https://www.electrosmash.com/mxr-dyna-comp-analysis">https://www.electrosmash.com/mxr-dyna-comp-analysis</a> (accessed December 12, 2025)
                </li>
            </ol>


            <p style={{ marginTop: 32 }}>
                <a href="https://github.com/rerdavies/rerdavies.github.io/discussions/3">🗨 COMMENTS</a>
            </p>




            <CopyrightSlug />
        </BlogPage >

    );
}


