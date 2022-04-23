import { linearGradient, rgba } from 'polished';
import { createGlobalStyle } from "styled-components";
import { ThemeColor } from "./enuns/ThemeColors";

const AppTheme = createGlobalStyle`
  body {
    background-color: ${ ThemeColor.Bege };
    color: ${ ThemeColor.LightBlack };
    margin: 0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
  }
  * {
    box-sizing: border-box;
    font-family: 'Kanit', sans-serif;
  }
  form {
    width: 100%;
  }
  input {
    border-color: ${ ThemeColor.LightBlack };
    border-width: 1px;
    border-style: solid;
    line-height: 14px;
    padding: 3px;
    background-color: transparent;
    outline: none;
    transition: all 0.3s ease;
    width: 100%;
    font-size: 10px;
    font-weight: 600;
    &:not(disabled) {
      &:hover {
        background-color: ${ ThemeColor.StrongBege };
      }
      &:focus {
        background-color: ${ ThemeColor.Highlight };
        border-color: ${ ThemeColor.Highlight };
        color: ${ ThemeColor.Bege };
      }
    }
    &:disabled {
      opacity: 0.5;
    }
  }
  table {
    border-spacing: 0;
    width: 100%;
    thead {
      tr {
        position: relative;
      }
      th {
        text-align: left;
        padding: 5px 10px;
        background-color: ${ linearGradient({
          colorStops: [
            `${ rgba(ThemeColor.StrongBege, 0) } 0%`,
            `${ rgba(ThemeColor.StrongBege, 0.25) } 100%`,
          ],
          toDirection: 'to bottom',
          fallback: 'transparent',
        }) }
      }
    }
    tbody {
      tr {
        background-color: ${ rgba(ThemeColor.StrongBege, 0.25) };
        &:nth-child(even) {
          background-color: ${ rgba(ThemeColor.StrongBege, 0.5) };
        }
        &:hover {
          cursor: pointer;
          background-color: ${ ThemeColor.Highlight };
          color: ${ ThemeColor.Bege };
          a {
            color: ${ ThemeColor.Bege };
          }
        }
        td {
          text-align: left;
          padding: 5px 10px;
          &:first-child {
            border-radius: 5px 0 0 5px;
          }
          &:last-child {
            border-radius: 0 5px 5px 0;
          }
        }
        &:first-child {
          td {
            &:first-child {
              border-radius: 0 0 0 5px;
            }
            &:last-child {
              border-radius: 0 0 5px 0;
            }
          }
        }
      }
    }
  }
`;

export default AppTheme;
