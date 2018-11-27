import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxTemplateWebPartStrings';
import SpfxTemplate from './components/SpfxTemplate';
import { ISpfxTemplateProps } from './components/ISpfxTemplateProps';

export interface ISpfxTemplateWebPartProps {
  description: string;
}

export default class SpfxTemplateWebPart extends BaseClientSideWebPart<ISpfxTemplateWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxTemplateProps > = React.createElement(
      SpfxTemplate,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
