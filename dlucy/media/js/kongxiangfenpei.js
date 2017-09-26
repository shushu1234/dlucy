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

        nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';
        nCloneTd0.innerHTML = '<span class="row-details row-details-close"></span>';


        var nOperaTh = document.createElement('th');
        var nOperaTd = document.createElement('td');
        var nOperaTh0 = document.createElement('th');
        var nOperaTd0 = document.createElement('td');

        nOperaTd.innerHTML = '<a  class="btn blue row-add" style="font-size: 10px;padding: 2px 8px;">提交</a>';
        nOperaTd0.innerHTML = '<a  class="btn blue row-add" style="font-size: 10px;padding: 2px 8px;">提交</a>';


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

        /* Add event listener for opening and closing details
         * Note that the indicator for showing which row is open is not controlled by DataTables,
         * rather it is done here
         */

        function delRow(nTr) {

        }




        var nTr;


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


        $('#sample_1').on('click', ' tbody td .row-add', function () {

            var nTr = $(this).parents('tr')[0];
            var aData = oTable.fnGetData(nTr);

            $("#order_no").val(aData[4]);
            $("#customer_name").val(aData[5]);
            $("#boxtype").val(aData[7]);
            $("#pickup_addr").val(aData[13]);
            $("#tianjin_pickup").val(aData[15]);
            $("#beijing_pickup").val(aData[16]);
            $("#zhangjiakou_pickup").val(aData[17]);
            $("#duikou4_pickup").val(aData[18]);

            oTable.fnDeleteRow(nTr);

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