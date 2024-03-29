import { Component, Host, h, Element, State, Prop } from '@stencil/core';
import { randomId } from '../../utils/utils';

@Component({
  tag: 'ojp-listbox',
  styleUrl: 'ojp-listbox.scss',
  shadow: true,
})
export class OjpListbox {

  @Element() el: HTMLElement;

  mainButton: HTMLElement;
  mainList: HTMLElement;
  mainListId: string;

  @Prop({
    reflect: true,
    mutable: true,
  })
  open: boolean = false; // open/close state of the listbox

  @Prop({
    reflect: true,
    mutable: false
  })
  activeSelectionIndex: number = 0;

  @Prop() onItemSelected: Function;

  @State() activeDescendantIndex: number = 0; // used for aria-activedescendant


  componentDidLoad() {
    // since this method is called once before the component is rendered, we need to set the initial state
    // keeping state references to the DOM elements here is convenient
    // just to keep the code a bit cleaner

    this.mainButton = this.el.shadowRoot.querySelector('#main-button');

    if(this.onItemSelected) {
      console.log("has listener", this.onItemSelected);
      this.el.addEventListener('itemselected', (e) => {
        this.onItemSelected(e);
      });
    }

    const slot = this.el.shadowRoot.querySelector('slot');
    if(slot) { // before the first render, the list will be empty, so we need to wait for the slot to be populated
      const assignedNodes = slot.assignedNodes();
      if(!assignedNodes || assignedNodes.length !== 3 || assignedNodes[1].nodeName !== 'UL') {
        // making sure the nested element is a <ul>
        throw new Error('ojp-listbox can only have one child and it should be a <ul>');
      }

      this.mainList = assignedNodes[1] as HTMLElement;

      // we can finally use the list
      this.initAttributes();
      this.initListeners();
      this.selectIndex(0, true);
    }
  }

  initAttributes() {
    const randId = randomId();
    const mainButtonId = `ojp-listbox-button-${randId}`;
    this.mainListId = `ojp-listbox-list-${randId}`;

    this.mainButton.setAttribute('aria-haspopup', 'listbox');

    this.mainButton.setAttribute('id', mainButtonId);
    this.mainButton.setAttribute('aria-controls', this.mainListId);

    this.mainList.setAttribute('id', this.mainListId);
    this.mainList.setAttribute('tabindex', '-1');
    this.mainList.setAttribute('role', 'listbox');

    this.mainList.querySelectorAll('li').forEach((li, index) => {
      li.setAttribute('role', 'option');
      li.setAttribute('id', this.getListItemId(index));
    });

    this.el.style.setProperty('--list-height', `${this.mainList.scrollHeight}px`);
  }

  getListItemId(index) {
    return `${this.mainListId}-item-${index}`;
  }

  initListeners() {
    this.mainButton.addEventListener('click', () => {
      this.toggleDropdown(!this.open);
    });

    this.mainList.querySelectorAll('li').forEach((li, index) => {
      li.addEventListener('click', () => {
        this.selectIndex(index);
      });
    });

    this.mainList.addEventListener('keydown', e => {

      switch (e.code) {
        case 'ArrowUp':
          if (this.activeDescendantIndex > 0) {
            e.preventDefault();
            this.activeDescendantIndex -= 1;
          }
          break;
        case 'ArrowDown':
          if (this.activeDescendantIndex < this.mainList.children.length - 1) {
            e.preventDefault();
            this.activeDescendantIndex += 1;
          }
          break;
        case 'PageUp':
          e.preventDefault();
          this.activeDescendantIndex = 0;
          break;
        case 'PageDown':
          e.preventDefault();
          this.activeDescendantIndex = this.mainList.children.length - 1;
          break;
        case 'Enter':
        case 'Space':
          e.preventDefault();
          this.selectIndex(this.activeDescendantIndex);
          break;
        case 'Escape':
          e.preventDefault();
          this.mainList.blur();
          break;
        default:
          return;
      }

      this.mainList.setAttribute('aria-activedescendant', this.getListItemId(this.activeDescendantIndex));
      this.setAriaSelectedAttribute(this.mainList.children[this.activeDescendantIndex]);
    });

    this.mainList.addEventListener('blur', () => {
      this.toggleDropdown(false);
    });
  }

  selectIndex(index, silent = false) {
    if (index >= this.mainList.children.length) {
      return;
    }

    const li = this.mainList.children[index] as HTMLElement;
    const label = li.innerHTML;
    const value = li.dataset.value ?? '';

    this.activeSelectionIndex = index;
    this.mainButton.innerHTML = label;
    this.mainButton.setAttribute('aria-label', label);
    this.mainList.setAttribute('aria-label', label);
    this.setCheckedClass(li);

    if(!silent) {
      this.dispatchSelectEvent(label, value);
    }

    this.toggleDropdown(false);
  }

  setCheckedClass(selectedLi) {
    this.mainList.querySelectorAll('li').forEach((li) => {
      if (li.isEqualNode(selectedLi)) {
        selectedLi.classList.add('checked');
      } else {
        li.classList.remove('checked');
      }
    });

    selectedLi.classList.add('checked');
  }

  setAriaSelectedAttribute(selectedLi) {
    this.mainList.querySelectorAll('li').forEach((li) => {
      if (li.isEqualNode(selectedLi)) {
        selectedLi.setAttribute('aria-selected', true);
      } else {
        li.removeAttribute('aria-selected');
      }
    });
  }

  // dispatch an event whenever the selection changes
  dispatchSelectEvent(label, value) {
    const event = new CustomEvent('itemselected', {
      bubbles: true,
      cancelable: true,
      composed: true, // this is required to make the event break beyond the shadow DOM
      detail: {
        label,
        value
      }
    });
    this.el.dispatchEvent(event);
  }

  toggleDropdown(isOpen) {
    this.open = isOpen;

    if (isOpen) {
      this.mainButton.setAttribute('aria-expanded', 'true');
      this.mainList.classList.add('expanded');
      this.mainList.setAttribute('aria-activedescendant', this.getListItemId(this.activeDescendantIndex));
      this.mainList.focus();
    } else {
      this.mainButton.setAttribute('aria-expanded', 'false');
      this.mainList.classList.remove('expanded');
      this.activeDescendantIndex = this.activeSelectionIndex;
      this.mainList.blur();
    }

  }

  // this is the HTML markup for the component
  // in JSX syntax
  render() {
    return (
      <Host>
        <button id="main-button" class="ojp-listbox-button"></button>
        <slot></slot>
      </Host>
    );
  }

}
