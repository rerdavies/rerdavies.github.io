#!/bin/bash

# Plot spectrum data exported from Audacity using gnuplot
# Usage: ./plot_spectrum.sh <input_file.txt> [output_file.png]

if [ $# -lt 1 ]; then
    echo "Usage: $0 <input_file.txt> [output_file.png]"
    echo "  input_file.txt  - Spectrum file exported from Audacity"
    echo "  output_file.png - Optional output image file (default: spectrum.png)"
    exit 1
fi

INPUT_FILE="$1"
OUTPUT_FILE="${2:-spectrum.png}"

if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: Input file '$INPUT_FILE' not found"
    exit 1
fi

# Check if file has content
if [ ! -s "$INPUT_FILE" ]; then
    echo "Error: Input file '$INPUT_FILE' is empty"
    exit 1
fi

# Create temporary data file without header
TEMP_DATA=$(mktemp)
tail -n +2 "$INPUT_FILE" > "$TEMP_DATA"

# Check if we got any data
if [ ! -s "$TEMP_DATA" ]; then
    echo "Error: No data found in input file (only header or empty)"
    rm -f "$TEMP_DATA"
    exit 1
fi

# Create gnuplot script
gnuplot -persist <<EOF
set terminal qt size 1200,800 enhanced font 'Arial,12'

set title 'Frequency Spectrum' font 'Arial,16'
set xlabel 'Frequency (Hz)' font 'Arial,14'
set ylabel 'Level (dB)' font 'Arial,14'

set grid
set logscale x
set format x "10^{%T}"

# Set x-axis range to audio spectrum (10 Hz to 20 kHz)
set xrange [10:20000]

# Set y-axis range for typical dB values
set yrange [-100:0]

# Plot the data from temporary file (header already removed)
plot '$TEMP_DATA' using 1:2 with lines linewidth 2 linecolor rgb '#0066cc' title 'Spectrum'
EOF

# Clean up and report
PLOT_STATUS=$?
rm -f "$TEMP_DATA"

if [ $PLOT_STATUS -eq 0 ]; then
    echo "Spectrum plot displayed in Qt viewer"
else
    echo "Error: Failed to create plot"
    exit 1
fi
