import * as React from 'react';
//import styles from './SpfxTemplate.module.scss';
import { ISpfxTemplateProps } from './ISpfxTemplateProps';
require('../../../../node_modules/bootstrap/dist/css/bootstrap.css');
//https://asishpadhy.com/2017/12/08/implementing-bootstrap-and-font-awesome-in-sharepoint-framework-webparts-using-react/

export default class SpfxTemplate extends React.Component<ISpfxTemplateProps, {}> {
  public render(): React.ReactElement<ISpfxTemplateProps> {
    let cssUrl="";

    return (
      
            <div className="alert alert-primary" role="alert">
              This is a template for SPFX using bootstrap!
            </div>
           
    );
  }
}
