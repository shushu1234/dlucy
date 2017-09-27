var TableAdvanced = function () {

    var initTable1 = function () {

        /* Formating function for row details */
        function fnFormatDetails(oTable, nTr) {
            //alert(nTr);
            // var aData = oTable.fnGetData(nTr);
            // var sOut = '<table>';
            // sOut += '<tr><td colspan="2">==========================提货进度==========================</td></tr>';
            // sOut += '<tr><td>已提数量:</td><td>' + aData[19] + '</td></tr>';
            // sOut += '<tr><td>当日提货数量:</td><td>' + aData[20] + '</td></tr>';
            // sOut += '</table>';

            // return sOut;
        }

        /*
         * Insert a 'details' column to the table
         */
        var nCloneTh = document.createElement('th');
        var nCloneTd = document.createElement('td');
        nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';

        var nOperaTh = document.createElement('th');
        var nOperaTd = document.createElement('td');
        nOperaTd.innerHTML = '<a  class="btn blue row-add" style="font-size: 10px;padding: 2px 8px;">提交</a>';

        $('#sample_1 thead tr').each(function () {
            this.insertBefore(nCloneTh, this.childNodes[0]);
        });

        $('#sample_1 tbody tr').each(function () {
            this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
        });


        $('#sample_1 thead tr').each(function () {
            this.insertBefore(nOperaTh, this.childNodes[1]);
        });

        $('#sample_1 tbody tr').each(function () {
            this.insertBefore(nOperaTd.cloneNode(true), this.childNodes[1]);
        });

        $('#sample_1').on('click', ' tbody td .row-add', function () {
           if (window.addflag){
               var nTr = $(this).parents('tr')[0];
               var aData = oTable.fnGetData(nTr);
               var str=" <tr>"+
                   "<td><a  class=\"btn red btn-del\" id=\"btn-del-opera\" style=\"font-size: 10px;padding: 2px 8px;\">删除</a></td>"+
                   "<td>" +
                   aData[6] +
                   "</td>"+
                   "<td>" +
                   aData[7] +
                   "</td>"+
                   "<td>" +
                   aData[8]     +
                   "</td>"+
                   "<td >" +
                   aData[9] +
                   "</td>"+
                   "<td>" +
                   aData[10] +
                   "</td>"+
                   "<td>" +
                   aData[11] +
                   "</td>"+
                   "<td>" +
                   aData[12] +
                   "</td>"+
                   "<td >" +
                   aData[13] +
                   "</td>"+
                   "<td>" +
                   aData[14] +
                   "</td>"+
                   "<td>" +
                   aData[15] +
                   "</td>"+
                   "<td>" +
                   aData[16] +
                   "</td>"+
                   "<td >" +
                   aData[17] +
                   "</td>"+
                   "</tr>";
               $("#tbody-box").append(str);
               $("#info-id").val(aData[2]);
               $("#info-status").val(aData[3]);
               $("#info-timestamp").val(aData[4]);
               $("#info-addtime").val(aData[5]);
               oTable.fnDeleteRow(nTr);
               window.addflag=false;
           }
        });

        var oTable = $('#sample_1').dataTable({
            "aoColumns": [
                null,
                null,
                {"bVisible": false},
                {"bVisible": false},
                {"bVisible": false},
                null,
                null,
                null,
                null,
                null,

                null,
                null,
                null,
                null,
                null,

                null,
                null,
                null,
                null,
                null,

                null,

            ],
            "aoColumnDefs": [
                {"bSortable": false, "aTargets": [0]}
            ],
            "aaSorting": [[3,'asc'],[4, 'desc']],
            "aLengthMenu": [
                [10, 50, 100, -1],
                [10, 50, 100, "全部"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": 10,
            "scrollY": "200px",
            "scrollCollapse": true,
            bFilter: false,


        });

        jQuery('#sample_1_wrapper .dataTables_filter input').addClass("m-wrap small"); // modify table search input
        jQuery('#sample_1_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown
        jQuery('#sample_1_wrapper .dataTables_length select').select2(); // initialzie select2 dropdown


        $('#sample_1').on('click', ' tbody td .row-details', function () {
            var nTr = $(this).parents('tr')[0];
            if (oTable.fnIsOpen(nTr)) {
                /* This row is already open - close it */
                $(this).addClass("row-details-close").removeClass("row-details-open");
                oTable.fnClose(nTr);
            }
            else {
                /* Open this row */
                $(this).addClass("row-details-open").removeClass("row-details-close");
                oTable.fnOpen(nTr, fnFormatDetails(oTable, nTr), 'details');
            }
        });
    }

    return {

        //main function to initiate the module
        init: function () {

            if (!jQuery().dataTable) {
                return;
            }

            initTable1();
        },

        opera: function () {

            initTable1().delRow();

        }



    };

}();