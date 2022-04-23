import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  border-color: #F00;
  padding: 8px;
  flex-wrap: initial;
  &.Grid-container {
    flex-wrap: wrap;
  }
  &.Grid-item {
    &.Grid-xs-1 {
      width: 8.333333333333334%;
    }
    
    &.Grid-xs-2 {
      width: 16.666666666666668%;
    }
    
    &.Grid-xs-3 {
      width: 25%;
    }
    
    &.Grid-xs-4 {
      width: 33.333333333333336%;
    }
    
    &.Grid-xs-5 {
      width: 41.66666666666667%;
    }
    
    &.Grid-xs-6 {
      width: 50%;
    }
    
    &.Grid-xs-7 {
      width: 58.333333333333336%;
    }
    
    &.Grid-xs-8 {
      width: 66.66666666666667%;
    }
    
    &.Grid-xs-9 {
      width: 75%;
    }
    
    &.Grid-xs-10 {
      width: 83.33333333333334%;
    }
    
    &.Grid-xs-11 {
      width: 91.66666666666667%;
    }
    
    &.Grid-xs-12 {
      width: 100%;
    }
    
    @media (min-width: 600px) {
      &.Grid-sm-1 {
        width: 8.333333333333334%;
      }
      
      &.Grid-sm-2 {
        width: 16.666666666666668%;
      }
      
      &.Grid-sm-3 {
        width: 25%;
      }
      
      &.Grid-sm-4 {
        width: 33.333333333333336%;
      }
      
      &.Grid-sm-5 {
        width: 41.66666666666667%;
      }
      
      &.Grid-sm-6 {
        width: 50%;
      }
      
      &.Grid-sm-7 {
        width: 58.333333333333336%;
      }
      
      &.Grid-sm-8 {
        width: 66.66666666666667%;
      }
      
      &.Grid-sm-9 {
        width: 75%;
      }
      
      &.Grid-sm-10 {
        width: 83.33333333333334%;
      }
      
      &.Grid-sm-11 {
        width: 91.66666666666667%;
      }
      
      &.Grid-sm-12 {
        width: 100%;
      }
    }
    
    @media (min-width: 900px) {
      &.Grid-md-1 {
        width: 8.333333333333334%;
      }
      
      &.Grid-md-2 {
        width: 16.666666666666668%;
      }
      
      &.Grid-md-3 {
        width: 25%;
      }
      
      &.Grid-md-4 {
        width: 33.333333333333336%;
      }
      
      &.Grid-md-5 {
        width: 41.66666666666667%;
      }
      
      &.Grid-md-6 {
        width: 50%;
      }
      
      &.Grid-md-7 {
        width: 58.333333333333336%;
      }
      
      &.Grid-md-8 {
        width: 66.66666666666667%;
      }
      
      &.Grid-md-9 {
        width: 75%;
      }
      
      &.Grid-md-10 {
        width: 83.33333333333334%;
      }
      
      &.Grid-md-11 {
        width: 91.66666666666667%;
      }
      
      &.Grid-md-12 {
        width: 100%;
      }
    }
    
    @media (min-width: 1200px) {
      &.Grid-lg-1 {
        width: 8.333333333333334%;
      }
      
      &.Grid-lg-2 {
        width: 16.666666666666668%;
      }
      
      &.Grid-lg-3 {
        width: 25%;
      }
      
      &.Grid-lg-4 {
        width: 33.333333333333336%;
      }
      
      &.Grid-lg-5 {
        width: 41.66666666666667%;
      }
      
      &.Grid-lg-6 {
        width: 50%;
      }
      
      &.Grid-lg-7 {
        width: 58.333333333333336%;
      }
      
      &.Grid-lg-8 {
        width: 66.66666666666667%;
      }
      
      &.Grid-lg-9 {
        width: 75%;
      }
      
      &.Grid-lg-10 {
        width: 83.33333333333334%;
      }
      
      &.Grid-lg-11 {
        width: 91.66666666666667%;
      }
      
      &.Grid-lg-12 {
        width: 100%;
      }
    }
    
    @media (min-width: 1536px) {
      &.Grid-xl-1 {
        width: 8.333333333333334%;
      }
      
      &.Grid-xl-2 {
        width: 16.666666666666668%;
      }
      
      &.Grid-xl-3 {
        width: 25%;
      }
      
      &.Grid-xl-4 {
        width: 33.333333333333336%;
      }
      
      &.Grid-xl-5 {
        width: 41.66666666666667%;
      }
      
      &.Grid-xl-6 {
        width: 50%;
      }
      
      &.Grid-xl-7 {
        width: 58.333333333333336%;
      }
      
      &.Grid-xl-8 {
        width: 66.66666666666667%;
      }
      
      &.Grid-xl-9 {
        width: 75%;
      }
      
      &.Grid-xl-10 {
        width: 83.33333333333334%;
      }
      
      &.Grid-xl-11 {
        width: 91.66666666666667%;
      }
      
      &.Grid-xl-12 {
        width: 100%;
      }
    }
  }
`

export default Wrapper;