import jQuery from 'jquery';
import {MDCTextField} from '@material/textfield';

jQuery(document).ready(function () {
    jQuery(".mdc-text-field").each(function (index, domElem) {
        const textField = new MDCTextField(domElem);
    });
});

