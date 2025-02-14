import React from 'react';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from './theme/AppTheme';
import AppHeader2 from './AppHeader2';

import { useWindowSize } from '@uidotdev/usehooks';

import { isVerticalToolbar} from "./Breakpoints"

export default function App(props: {children: React.ReactNode,  disableCustomTheme?: boolean }) {

  const {width} = useWindowSize();

  const sideHeader = isVerticalToolbar(width);

  const scrollHeader = (node: HTMLDivElement | null) => {
    if (node) {
      let appFrameHeader = document.getElementById("app_frame_header");
      if (!appFrameHeader) {
        return;
      }

      if  (sideHeader)
      {
        appFrameHeader.style.boxShadow = "0px 2px 8px 2px #0002";
      } else {
        let scrollPixelOffset = node.scrollTop / (node.scrollHeight - node.clientHeight) * node.clientHeight;
        let scrollAmount = scrollPixelOffset / 60
        if (scrollAmount > 1) {
          scrollAmount = 1;
        }
        let headerBoxShadow: string = `0px `
          + (scrollAmount * 2) + `px `
          + (scrollAmount * 3)
          + `px 1px rgba(0, 0, 0, ` + (0.4 * scrollAmount) + `)`;
          appFrameHeader.style.boxShadow = headerBoxShadow;
      }
    };
  };

  useEffect(() => {
    const header = document.getElementById("app_frame_header");
    if (header) {
      scrollHeader(header as HTMLDivElement);
    }
  });

  if (!width) {
    return (<div></div>);
  }
  if (sideHeader) 
  {
      return (
        <AppTheme {...props}  >
          <CssBaseline enableColorScheme />
          <div className="AppFrameV">
            <div className="AppFrame-vHeader" id="app_frame_header"
            >
              <AppHeader2 vertical={true}/>
            </div>
            <div className="AppFrame-content" onScroll={
              (e) => {
                scrollHeader(e.target as HTMLDivElement);
              }
            } ref={(node) => {
              scrollHeader(node);
            }}>
              { props.children }
            </div>

          </div>
        </AppTheme>
      );

  } else {

    return (
      <AppTheme {...props}  >
        <CssBaseline enableColorScheme />
        <div className="AppFrame">
          <div className="AppFrame-header" id="app_frame_header"
            style={{
            }}
          >
            <AppHeader2 vertical={false}/>
          </div>
          <div className="AppFrame-content" onScroll={
            (e) => {
              scrollHeader(e.target as HTMLDivElement);
            }
          } ref={(node) => {
            scrollHeader(node);
          }}>
            { props.children }
          </div>

        </div>
      </AppTheme>
    );
  }
}
