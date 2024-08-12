import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { RouterService } from './model/context/routers/routers.jsx';

createRoot(document.getElementById('root')).render(
  <StyleSheetManager shouldForwardProp={isPropValid}>
    <RouterService/>
  </StyleSheetManager>
  
)
