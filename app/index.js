import jQuery from 'jquery';
import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';
import SwaggerUI from 'swagger-ui';

jQuery(document).ready(function () {
    
    // Add ripple effect to buttons.
    jQuery(".mdc-button").each(function (index, elem) {
        const buttonRipple = new MDCRipple(elem);
    });

    jQuery(".mdc-text-field").each(function (index, elem) {
        const textField = new MDCTextField(elem);
    });
    
    SwaggerUI({
        dom_id: '#mySwaggerUIDomId',
        url: 'openapi.txt'
    });
});

