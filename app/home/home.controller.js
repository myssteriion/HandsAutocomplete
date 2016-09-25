(function() {
    'use strict';

    angular.module("HandsAutocomplete").controller("homeController", homeController);


    function homeController() {

        var vm = this;

        vm.data = [{a: ""}];

        vm.settings = {
            columns: ["A", "B", "C", "D"],
            autoRowSize: true,
            manualColumnResize: true,
            columnSorting: true,
            sortIndicator: true,
            allowRemoveRow: true,
            rowHeaders: true,
            // contextMenu: {
            //     items: {
            //         'remove_row': {
            //             name: $translate.instant('REMOVE_ROW'),
            //             disabled : function() {
            //                 return vm.isReadOnly;
            //             }
            //         }
            //     }
            // },
            preventOverflow: 'horizontal',
            width: 1170,
            autoWrapRow: true,
            height: 520,
            maxRows: 20,
            readOnlyCellClassName: 'read-only-cell',
            // fixedColumnsLeft: 2,
            // afterCreateRow: function (index, numberOfRows) {
            //     if( vm.hiddenMetadatas !== undefined ) { vm.hiddenMetadatas.splice(index, numberOfRows); }
            // },
            // onBeforeRemoveRow: function (index, amount) {
            //     for (var i = 0; i < amount; i++) {
            //         var deleteId = vm.hiddenMetadatas[index+i].id;
            //         MetadataService.deleteMetadata(deleteId,
            //             onRowDeleted,
            //             onRowDeletionError);
            //     }
            //
            //     function onRowDeleted(){
            //         GrowlService.success('ROW_DELETED');
            //     }
            //
            //     function onRowDeletionError () {
            //         GrowlService.single.error('CONNECTION_ERROR', NOTIF_DISPLAY_TIME);
            //     }
            // },
            // onAfterChange: function (data, amount) {
            //     var updatedCount = 0;
            //     if (data !== null && (amount === "edit" || amount === "autofill")) {
            //         data.forEach(function (selectedElement) {
            //             vm.updateLine(vm.hiddenMetadatas[selectedElement[0]], onAllLinesUpdated);
            //         });
            //     }
            //
            //     function onAllLinesUpdated() {
            //         updatedCount++;
            //         if (updatedCount === data.length) {
            //             updateCurrentPage(renderTable);
            //         }
            //     }
            // },
            // onBeforeColumnSort: function (data, amount) {
            //     if(amount !== undefined){
            //         if(amount){
            //             vm.sort = vm.columns[data].data+",ASC";
            //         }else{
            //             vm.sort = vm.columns[data].data+",DESC";
            //         }
            //     }
            //
            //
            //     updateCurrentPage(renderTable);
            // },
            // afterSelectionEndByProp: function(row, prop, rowEnd, propEnd) {
            //     if (!vm.isReadOnly) {
            //         var column = _.find(vm.columns, ['data', prop]);
            //         if (column !== undefined && column.repeating && (column.type === 'ENUM_STRICT' || column.type === 'ENUM')) {
            //             vm.openRepeatingMetadataModal(row, prop);
            //         }
            //     }
            // },
            // beforeRenderer: function(td, row, col, prop, value, cellProperties) {
            //     var isValid = true;
            //     var propertyName = prop.substring("content.".length, prop.length);
            //     var backgroundColor;
            //     var currentColumn = _.find(vm.columns, {data: prop});
            //
            //     if (vm.hiddenMetadatas !== undefined && vm.hiddenMetadatas.length > 0 && prop !== 'valid' && prop !== 'pathDirectoryExist' ) {
            //         isValid = vm.hiddenMetadatas[row].contentValidation[propertyName];
            //     }
            //
            //     if (currentColumn !== undefined && currentColumn.readOnly === true) {
            //         return;
            //     }
            //
            //     backgroundColor = 'white-background';
            //
            //     if ( !isValid ) {
            //         backgroundColor = 'red-background';
            //     }
            //     else if ( prop === 'content.destPath' && vm.hiddenMetadatas[row] !== undefined && vm.hiddenMetadatas[row].pathDirectoryExist === false ) {
            //         backgroundColor = 'orange-background';
            //     }
            //
            //     td.className = backgroundColor;
            // }
        };

    }

});