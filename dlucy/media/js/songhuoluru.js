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
        var nCloneTh0 = document.createElement('th');
        var nCloneTd0 = document.createElement('td');
        var nCloneTh2 = document.createElement('th');
        var nCloneTd2 = document.createElement('td');
        nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';
        nCloneTd0.innerHTML = '<span class="row-details row-details-close"></span>';
        nCloneTd2.innerHTML = '<span class="row-details row-details-close"></span>';


        var nOperaTh = document.createElement('th');
        var nOperaTd = document.createElement('td');
        var nOperaTh0 = document.createElement('th');
        var nOperaTd0= document.createElement('td');
        var nOperaTh2 = document.createElement('th');
        var nOperaTd2= document.createElement('td');
        nOperaTd.innerHTML = '<a  class="btn blue row-add" style="font-size: 10px;padding: 2px 8px;">提交</a>';
        nOperaTd0.innerHTML = '<a  class="btn blue row-add" style="font-size: 10px;padding: 2px 8px;">提交</a>';
        nOperaTd2.innerHTML = '<a  class="btn blue row-add" style="font-size: 10px;padding: 2px 8px;">提交</a>';

        $('#sample_0 thead tr').each(function () {
            this.insertBefore(nCloneTh0, this.childNodes[0]);
        });

        $('#sample_0 tbody tr').each(function () {
            this.insertBefore(nCloneTd0.cloneNode(true), this.childNodes[0]);
        });

        $('#sample_0 thead tr').each(function () {
            this.insertBefore(nOperaTh0, this.childNodes[1]);
        });

        $('#sample_0 tbody tr').each(function () {
            this.insertBefore(nOperaTd0.cloneNode(true), this.childNodes[1]);
        });

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
        $('#sample_2 thead tr').each(function () {
            this.insertBefore(nCloneTh2, this.childNodes[0]);
        });

        $('#sample_2 tbody tr').each(function () {
            this.insertBefore(nCloneTd2.cloneNode(true), this.childNodes[0]);
        });

        $('#sample_2 thead tr').each(function () {
            this.insertBefore(nOperaTh2, this.childNodes[1]);
        });

        $('#sample_2 tbody tr').each(function () {
            this.insertBefore(nOperaTd2.cloneNode(true), this.childNodes[1]);
        });


        /*
         * Initialse DataTables, with no sorting on the 'details' column
         */

        var oTable = $('#sample_1').dataTable({
            "aoColumns": [
                null,
                null,
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


            ],
            "aoColumnDefs": [
                {"bSortable": false, "aTargets": [0]}
            ],
            "aaSorting": [[2, 'desc']],
            "aLengthMenu": [
                [10, 50, 100, -1],
                [10, 50, 100, "全部"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": 10,
            "scrollY": "200px",
            "scrollCollapse": true,
            bFilter: false,
            fixedHeader: {
                header: true,
                footer: true
            }
        });

        var oTable0 = $('#sample_0').dataTable({
            "aoColumns": [
                null,
                null,
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

            ],
            "aoColumnDefs": [
                {"bSortable": false, "aTargets": [0]}
            ],
            "aaSorting": [[2, 'desc']],
            "aLengthMenu": [
                [10, 50, 100, -1],
                [10, 50, 100, "全部"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": 10,
            "scrollY": "200px",
            "scrollCollapse": true,
            bFilter: false,
            fixedHeader: {
                header: true,
                footer: true
            }
        });

        var oTable0 = $('#sample_2').dataTable({
            "aoColumns": [
                null,
                null,
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
                null,

            ],
            "aoColumnDefs": [
                {"bSortable": false, "aTargets": [0]}
            ],
            "aaSorting": [[2, 'desc']],
            "aLengthMenu": [
                [10, 50, 100, -1],
                [10, 50, 100, "全部"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": 10,
            "scrollY": "200px",
            "scrollCollapse": true,
            bFilter: false,
            fixedHeader: {
                header: true,
                footer: true
            }
        });

        jQuery('#sample_1_wrapper .dataTables_filter input').addClass("m-wrap small"); // modify table search input
        jQuery('#sample_1_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown
        jQuery('#sample_1_wrapper .dataTables_length select').select2(); // initialzie select2 dropdown

        jQuery('#sample_0_wrapper .dataTables_filter input').addClass("m-wrap small"); // modify table search input
        jQuery('#sample_0_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown
        jQuery('#sample_0_wrapper .dataTables_length select').select2(); // initialzie select2 dropdown

        jQuery('#sample_2_wrapper .dataTables_filter input').addClass("m-wrap small"); // modify table search input
        jQuery('#sample_2_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown
        jQuery('#sample_2_wrapper .dataTables_length select').select2(); // initialzie select2 dropdown

        /* Add event listener for opening and closing details
         * Note that the indicator for showing which row is open is not controlled by DataTables,
         * rather it is done here
         */

        function delRow(nTr) {

        }

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


        $('#sample_1').on('click', ' tbody td .row-add', function () {
            var nTr = $(this).parents('tr')[0];
            var aData = oTable.fnGetData(nTr);
            var str=" <tr>"+
                "<td><a  class=\"btn red btn-del\" style=\"font-size: 10px;padding: 2px 8px;\">删除</a></td>"+
                "<td>" +
                aData[4] +
                "</td>"+
                "<td>" +
                aData[5] +
                "</td>"+
                "<td>" +
                aData[6]     +
                "</td>"+
                "<td >" +
                aData[7] +
                "</td>"+
                "<td>" +
                aData[8] +
                "</td>"+
                "<td>" +
                aData[9] +
                "</td>"+
                "<td>" +
                aData[10] +
                "</td>"+
                "<td >" +
                aData[11] +
                "</td>"+
                "<td>" +
                aData[12] +
                "</td>"+
                "<td>" +
                aData[13] +
                "</td>"+
                "<td>" +
                aData[14] +
                "</td>"+
                "<td >" +
                aData[15] +
                "</td>"+
                "</tr>";
            $("#tbody-box").append(str);
            oTable.fnDeleteRow(nTr);

        });




        var nTr;
        $('#sample_1').on('click', ' tbody td .row-delete', function () {
            nTr = $(this).parents('tr')[0];
            $("#user-attention").text("确认要删除该行数据吗?");
            $("#user-attentionflag").val(1);
            $('#static3').modal('show');
        });


        $("#btn-delrow").click(function () {
            var user_attentionfalg=$("#user-attentionflag").val();
            if(user_attentionfalg==1){
                oTable.fnDeleteRow(nTr);
            }
            if (user_attentionfalg==2){
                var aData = oTable.fnGetData(nTr);
                //  console.log(aData);
                // alert(user_attentionfalg);
                $("#info-order").val(aData[10]);
                $("#info-boxnum").val(aData[14]);
                $("#info-clientname").val(aData[12]);
                $("#info-id").val(aData[21]);
                $("#info-addtime").val(aData[9]);
                $("#info-boxtype option").each(function () {
                    if ($(this).text() == aData[13]) {
                        $(this).attr("selected", true);
                    }
                });

                $("#info-goodsname option").each(function () {
                    if ($(this).text() == aData[11]) {
                        $(this).attr("selected", true);
                    }
                });
                $("#info-port option").each(function () {
                    if ($(this).text() == aData[18]) {
                        $(this).attr("selected", true);
                    }
                });
                $("#info-tradetype option").each(function () {
                    if ($(this).text() == aData[20]) {
                        $(this).attr("selected", true);
                    }
                });
                $("#info-billcycle option").each(function () {
                    if ($(this).text() == aData[19]) {
                        $(this).attr("selected", true);
                    }
                });

                $("#info-pickdate" ).datepicker( 'setDate' , new Date(aData[2]));

                $("#info-pickaddr option").each(function (){
                    if($(this).text()==aData[1]){
                        $(this).attr("selected",true);
                    }});
                $("#info-pickperson option").each(function (){
                    if($(this).text()==aData[3]){
                        $(this).attr("selected",true);
                    }});
                $("#info-picktel option").each(function (){
                    if($(this).text()==aData[4]){
                        $(this).attr("selected",true);
                    }});

                $("#info-recdate" ).datepicker( 'setDate' , new Date(aData[6]));
                $("#info-recaddr option").each(function (){
                    if($(this).text()==aData[5]){
                        $(this).attr("selected",true);
                    }});
                $("#info-recperson option").each(function (){
                    if($(this).text()==aData[7]){
                        $(this).attr("selected",true);
                    }});
                $("#info-rectel option").each(function (){
                    if($(this).text()==aData[8]){
                        $(this).attr("selected",true);
                    }});
                oTable.fnDeleteRow(nTr);
            }
        })

        $('#sample_1').on('click', ' tbody td .row-edit', function () {
            $("#user-attention").text("确认要修改该行数据吗?");
            $("#user-attentionflag").val(2);
            $('#static3').modal('show');
            nTr = $(this).parents('tr')[0];
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