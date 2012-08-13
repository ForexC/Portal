/*
 * File: app/view/SimplePortlet.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.SimplePortlet', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.simpleportlet',

    isPortlet: true,
    cls: 'x-portlet',
    draggable: {
        moveOnDrag: false
    },
    frame: true,
    closable: true,
    collapsible: true,
    title: 'Portlet',

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }

});