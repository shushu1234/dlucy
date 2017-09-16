var TableAdvanced = function () {

    var initTable1 = function () {

        /* Formating function for row details */
        function fnFormatDetails(oTable, nTr) {
            // //alert(nTr);
            // var aData = oTable.fnGetData(nTr);
            // var sOut = '<table>';
            // sOut += '<tr><td colspan="2">==========================提货进度==========================</td></tr>';
            // sOut += '<tr><td>已提数量:</td><td>' + aData[19] + '</td></tr>';
            // sOut += '<tr><td>当日提货数量:</td><td>' + aData[20] + '</td></tr>';
            // sOut += '</table>';
            //
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
        nOperaTd.innerHTML = '<input class="row-selected " type=\"checkbox\" value=\"\" style=\"font-size: 10px;padding: 2px 8px;\" />';

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

        /*
         * Initialse DataTables, with no sorting on the 'details' column
         */
        var oTable = $('#sample_1').DataTable({
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


        });

        jQuery('#sample_1_wrapper .dataTables_filter input').addClass("m-wrap small"); // modify table search input
        jQuery('#sample_1_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown
        jQuery('#sample_1_wrapper .dataTables_length select').select2(); // initialzie select2 dropdown

        /* Add event listener for opening and closing details
         * Note that the indicator for showing which row is open is not controlled by DataTables,
         * rather it is done here
         */



        function delRow(nTr) {

        }


        $("#btn-printmodal").click(function () {
            var data = oTable.rows('.select').data();
            console.log(data);
            $("#printtr").remove();
            // alert(data[0][5]);
            var str1=" <tbody id=\"printtr\">"+
                "                     <tr>"+
                "<td colspan=\"14\" style=\""+
                "    font-size: 40px;"+
                "    height: 50px;"+
                "    line-height: 50px;"+
                "\">天津市胜腾货运有限公司</td>"+
                "                        </tr>"+
                "                        <tr>"+
                "<td colspan=\"14\" style=\"text-align: center;font-size: 22px;\">送货明细</td>"+
                "                        </tr>"+
                "                        <tr>"+
                "                            <td colspan=\"2\">TO:</td>"+
                "                            <td colspan=\"6\">"+
                "                                <select class=\"span12 m-wrap\" data-placeholder=\"Choose a Category\""+
                "                                                     tabindex=\"1\" id=\"info-to\" width=\"345px\">"+
                "                                <option value=\"\">请选择...</option>"+
                "                                <option value=\"Category 1\">张三丰</option>"+
                "                                <option value=\"Category 2\">王五</option>"+
                "                                <option value=\"Category 3\">赵六</option>"+
                "                                <option value=\"Category 4\">张珊</option>"+
                "                            </select>"+
                "                            </td>"+
                "                            <td colspan=\"2\">走船时间:</td>"+
                "                            <td colspan=\"6\">2017-9-11</td>"+
                "                        </tr>"+
                "                        <tr>"+
                "                            <td colspan=\"2\">FM:</td>"+
                "                            <td colspan=\"12\">天津胜腾</td>"+
                "                        </tr>"+
                "                        <tr id=\"printtr\">"+
                "                            <td colspan=\"1\">预计到港日</td>"+
                "                            <td colspan=\"1\">指令号</td>"+
                "                            <td colspan=\"1\">船名航次</td>"+
                "                            <td colspan=\"2\">运单号</td>"+
                "                            <td colspan=\"1\">箱号</td>"+
                "                            <td colspan=\"1\">封号</td>"+
                "                            <td colspan=\"2\">收货地址</td>"+
                "                            <td colspan=\"1\">联系人</td>"+
                "                            <td colspan=\"2\">联系电话</td>"+
                "                            <td colspan=\"1\">拖车费(元)</td>"+
                "                            <td colspan=\"1\">备注</td>"+
                "                        </tr>";
            var str2="<tr>"+
                "                            <td colspan=\"7\" style=\"text-align: left\">服务电话:022-59853734</td>"+
                "                            <td colspan=\"6\" style=\"text-align: left;border-left: none\">传真:022-66175318</td>"+
                "                            <td colspan=\"1\" style=\"text-align: left;border-left: none\">制单日期:2017-9-11</td>"+
                "                        </tr>"+
                " </tbody>";
            for(var i =0; i<data.length;i++){

                if (Array.isArray(data[i])){
                    window.operarow=data.length;
                    var str3="                        <tr class=\"edittr\">"+
                        "                            <td colspan=\"1\" >" +
                        data[i][4] +
                        "</td>"+
                        "                            <td colspan=\"1\" >" +
                        data[i][5] +
                        "</td>"+
                        "                            <td colspan=\"1\" >" +
                        data[i][6] +
                        "</td>"+
                        "                            <td colspan=\"2\">" +
                        data[i][7] +
                        "</td>"+
                        "                            <td colspan=\"1\">" +
                        data[i][8] +
                        "</td>"+
                        "                            <td colspan=\"1\">" +
                        data[i][9] +
                        "</td>"+
                        "                            <td colspan=\"2\">" +
                        data[i][9] +
                        "</td>"+
                        "                            <td colspan=\"1\">" +
                        data[i][10] +
                        "</td>"+
                        "                            <td colspan=\"2\">" +
                        data[i][11] +
                        "</td>"+
                        "                            <td colspan=\"1\"><input type=\"text\" class=\"m-wrap\" data-tabindex=\"1\" style=\"border: none;text-align: center;padding: 0px;\" ></td>"+
                        "                            <td colspan=\"1\"><input type=\"text\" class=\"m-wrap\" data-tabindex=\"1\" style=\"border: none;text-align: center;padding: 0px;\" ></td>"+
                        "                        </tr>";

                    str1+=str3;
                }
            }
            str1+=str2;
            $("#printtable").append(str1);
            $('#printmodal').modal('show');
        })


        $('#sample_1 tbody').on( 'click', 'td .row-selected', function () {
            $(this).parent().prevAll().parent().toggleClass('select');
        } );

        // $('#sample_1').on( 'click', 'tbody td .row-select', function () {
        //     var nTr = $(this).parents('tr')[0];
        //     alert(nTr);
        //     nTr.addClass('select');
        // } );
        $('#sample_1').on('click', ' tbody td .row-details', function () {
            var nTr = $(this).parents('tr')[0];
            // if (oTable.fnIsOpen(nTr)) {
            //     /* This row is already open - close it */
            //     $(this).addClass("row-details-close").removeClass("row-details-open");
            //     oTable.fnClose(nTr);
            // }
            // else {
            //     /* Open this row */
            //     $(this).addClass("row-details-open").removeClass("row-details-close");
            //     oTable.fnOpen(nTr, fnFormatDetails(oTable, nTr), 'details');
            // }
            // $('#printmodal').modal('show');

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