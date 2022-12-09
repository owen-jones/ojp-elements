import { Component, Host, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'ojp-modal',
  styleUrl: 'ojp-modal.scss',
  shadow: true,
  assetsDirs: ['assets'],
})

export class OjpModal {
// Props!

  // Close icon svg
  @Prop() closeIcon = 'close.svg';


  /**
  * Modal is open or opening (css transition)
  * Type: boolean
  */
   @Prop({
    reflect: true,
    mutable: false
  }) open = false;
 
  render() {
    return (
      <Host>
        <div class="ojp-modal-wrapper">
          <div class="ojp-modal-overlay"/>
            <div class="ojp-modal-panel">
              <div class="ojp-modal-close">
                <img src={getAssetPath('./assets/${this.closeIcon}')} alt="Close Icon"/>
              </div>
              <slot></slot>
            </div>
          </div>
      </Host>
    );
  }

}
