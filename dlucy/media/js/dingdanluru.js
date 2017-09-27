var TableAdvanced = function () {

    var initTable1 = function () {

        /* Formating function for row details */
        function fnFormatDetails(oTable, nTr) {
            //alert(nTr);
            var aData = oTable.fnGetData(nTr);
            var sOut = '<table>';
            sOut += '<tr><td colspan="2">==========================提货信息==========================</td></tr>';
            sOut += '<tr><td>提货联系人:</td><td>' + aData[19] + '</td></tr>';
            sOut += '<tr><td>提货地址:</td><td>' + aData[20] + '</td></tr>';
            sOut += '<tr><td>提货联系人电话:</td><td>' + aData[21] + '</td></tr>';
            sOut += '<tr><td colspan="2">==========================收货信息==========================</td></tr>';
            sOut += '<tr><td>收货联系人:</td><td>' + aData[22] + '</td></tr>';
            sOut += '<tr><td>收货地址:</td><td>' + aData[23] + '</td></tr>';
            sOut += '<tr><td>收货联系人电话:</td><td>' + aData[24] + '</td></tr>';
            sOut += '</table>';

            return sOut;
        }

        /*
         * Insert a 'details' column to the table
         */
        var nCloneTh = document.createElement('th');
        var nCloneTd = document.createElement('td');
        nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';

        var nOperaTh1 = document.createElement('th');
        var nOperaTd1 = document.createElement('td');
        nOperaTd1.innerHTML = '<a  class="btn blue row-update" style="font-size: 10px;padding: 2px 8px;">修改</a>';

        var nOperaTh2 = document.createElement('th');
        var nOperaTd2 = document.createElement('td');
        nOperaTd2.innerHTML = '<a  class="btn red row-del" style="font-size: 10px;padding: 2px 8px;">删除</a>';


        $('#sample_1 thead tr').each(function () {
            this.insertBefore(nCloneTh, this.childNodes[0]);
        });

        $('#sample_1 tbody tr').each(function () {
            this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
        });

        $('#sample_1 thead tr').each(function () {
            this.insertBefore(nOperaTh1, this.childNodes[1]);
        });

        $('#sample_1 tbody tr').each(function () {
            this.insertBefore(nOperaTd1.cloneNode(true), this.childNodes[1]);
        });

        $('#sample_1 thead tr').each(function () {
            this.insertBefore(nOperaTh2, this.childNodes[2]);
        });

        $('#sample_1 tbody tr').each(function () {
            this.insertBefore(nOperaTd2.cloneNode(true), this.childNodes[2]);
        });

        /*
         * Initialse DataTables, with no sorting on the 'details' column
         */
        var oTable = $('#sample_1').dataTable({
            "aoColumns": [
                null,
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

                {"bVisible": false},
                {"bVisible": false},
                {"bVisible": false},
                {"bVisible": false},
                {"bVisible": false},
                {"bVisible": false},

            ],
            "aoColumnDefs": [
                {"bSortable": false, "aTargets": [0]}
            ],
            "aaSorting": [[4, 'desc']],
            "aLengthMenu": [
                [10, 50, 100, -1],
                [10, 50, 100, "全部"] // change per page values here
            ],
            // set the initial value
            "iDisplayLength": 10,
            "scrollY": "300px",
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
        var nTr;
        $('#sample_1').on('click', ' tbody td .row-del', function () {
            nTr = $(this).parents('tr')[0];
            $("#user-attention").text("确认要删除该行数据吗?");
            //设置操作标志 1 删除
            $("#user-attentionflag").val(1);
            $('#static3').modal('show');
        });
        $('#sample_1').on('click', ' tbody td .row-update', function () {
            $("#user-attention").text("确认要修改该行数据吗?");
            //设置操作标志 2 修改
            $("#user-attentionflag").val(2);
            $('#static3').modal('show');
            nTr = $(this).parents('tr')[0];
        });

        //根据操作标志进行操作
        $("#btn-opera").click(function () {
            var user_attentionfalg=$("#user-attentionflag").val();
            if(user_attentionfalg==1){
                oTable.fnDeleteRow(nTr);
            }
            if (user_attentionfalg==2){
                var aData = oTable.fnGetData(nTr);
                console.log(aData);
                $("#info-id").val(aData[3]);
                $("#info-timestamp").val(aData[4]);
                $("#info-addtime").val(aData[5]);

                $("#order_no").val(aData[6]);
                $("#boxtype option").each(function () {
                    if ($(this).text() == aData[8]) {
                        $(this).attr("selected", true);
                    }
                });
                $("#pickup_addr option").each(function () {
                    if ($(this).text() == aData[20]) {
                        $(this).attr("selected", true);
                    }
                });
                $("#recperson_addr option").each(function () {
                    if ($(this).text() == aData[23]) {
                        $(this).attr("selected", true);
                    }
                });
                $("#trade_method option").each(function () {
                    if ($(this).text() == aData[14]) {
                        $(this).attr("selected", true);
                    }
                });


                $("#customer_name").val(aData[14]);
                $("#boxnum").val(aData[9]);
                $("#pickup_contacts option").each(function () {
                    if ($(this).text() == aData[16]) {
                        $(this).attr("selected", true);
                    }
                });
                $("#receive_contacts option").each(function () {
                    if ($(this).text() == aData[17]) {
                        $(this).attr("selected", true);
                    }
                });
                $("#settlement_interval option").each(function () {
                    if ($(this).text() == aData[15]) {
                        $(this).attr("selected", true);
                    }
                });

                //表格无
                $("#customer_code option").each(function () {
                    if ($(this).text() == aData[13]) {
                        $(this).attr("selected", true);
                    }
                });
                $("#product_name option").each(function () {
                    if ($(this).text() == aData[10]) {
                        $(this).attr("selected", true);
                    }
                });
                $("#pickupcontacts_tel option").each(function () {
                    if ($(this).text() == aData[21]) {
                        $(this).attr("selected", true);
                    }
                });
                $("#reccontacts_tel option").each(function () {
                    if ($(this).text() == aData[24]) {
                        $(this).attr("selected", true);
                    }
                });
                $("#delivery_date" ).datepicker( 'setDate' , new Date(aData[13]));

                $("#destport").val(aData[12]);
                $("#trade_type option").each(function () {
                    if ($(this).text() == aData[11]) {
                        $(this).attr("selected", true);
                    }
                });
                //表格无
                $("#invoice_situation option").each(function () {
                    if ($(this).text() == aData[13]) {
                        $(this).attr("selected", true);
                    }
                });
                //表格无
                $("#ship_operator option").each(function () {
                    if ($(this).text() == aData[13]) {
                        $(this).attr("selected", true);
                    }
                });
                $("#rate option").each(function () {
                    if ($(this).text() == aData[18]) {
                        $(this).attr("selected", true);
                    }
                });

                oTable.fnDeleteRow(nTr);
            }
        })

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