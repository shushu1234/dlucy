var TableAdvanced = function () {

    var initTable1 = function () {

        /* Formating function for row details */
        function fnFormatDetails(oTable, nTr) {
            //alert(nTr);
            var aData = oTable.fnGetData(nTr);
            var sOut = '<table>';
            sOut += '<tr><td colspan="2">==========================提货信息==========================</td></tr>';
            sOut += '<tr><td>提货联系人:</td><td>' + aData[17] + '</td></tr>';
            sOut += '<tr><td>提货地址:</td><td>' + aData[18] + '</td></tr>';
            sOut += '<tr><td>提货联系人电话:</td><td>' + aData[19] + '</td></tr>';
            sOut += '<tr><td colspan="2">==========================收货信息==========================</td></tr>';
            sOut += '<tr><td>收货联系人:</td><td>' + aData[20] + '</td></tr>';
            sOut += '<tr><td>收货地址:</td><td>' + aData[21] + '</td></tr>';
            sOut += '<tr><td>收货联系人电话:</td><td>' + aData[22] + '</td></tr>';
            sOut += '</table>';

            return sOut;
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

        $('#sample_1 thead tr').each(function () {
            this.insertBefore(nCloneTh, this.childNodes[0]);
        });

        $('#sample_1 tbody tr').each(function () {
            this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
        });
        $('#sample_0 thead tr').each(function () {
            this.insertBefore(nCloneTh0, this.childNodes[0]);
        });
        $('#sample_0 tbody tr').each(function () {
            this.insertBefore(nCloneTd0.cloneNode(true), this.childNodes[0]);
        });

        /*
         * Initialse DataTables, with no sorting on the 'details' column
         */
        var oTable0 = $('#sample_0').dataTable({
            "aoColumns": [
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
            // "sScrollX": "100%",
            "sScrollY": "300px",
            "bScrollCollapse": true,
            "bFilter": false,
        });
        var oTable = $('#sample_1').dataTable({
            "aoColumns": [
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
            "iDisplayLength": 19,
            "sScrollY": "400px",
            "bScrollCollapse": true,
            "bFilter": false,
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

        // $('#sample_1').on('click', ' tbody td .row-details', function () {
        //     var nTr = $(this).parents('tr')[0];
        //     if (oTable.fnIsOpen(nTr)) {
        //         /* This row is already open - close it */
        //         $(this).addClass("row-details-close").removeClass("row-details-open");
        //         oTable.fnClose(nTr);
        //     }
        //     else {
        //         /* Open this row */
        //         $(this).addClass("row-details-open").removeClass("row-details-close");
        //         oTable.fnOpen(nTr, fnFormatDetails(oTable, nTr), 'details');
        //     }
        // });
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
//自己添加的js操作
//给第一个继续提交添加事件
var aa=new Array();
var bb=new Array();
$('#btn-modal1').click(function(){
    /*第一个表格输入的数据*/
    var order_no = $("#order_no").val();
    var car_no = $("#car_no").val();
    var box_no = $("#box_no").val();
    var fees_amount1=$("#fees_amount1").val();
    var fees_amount2=$("#fees_amount2").val();
    var fees_amount3=$("#fees_amount3").val();
    var miscellaneous_items1=$("#miscellaneous_items1").val();
    var miscellaneous_items2=$("#miscellaneous_items2").val();
    var miscellaneous_items3=$("#miscellaneous_items3").val();
    aa=[order_no,miscellaneous_items1,fees_amount1,miscellaneous_items2,fees_amount2,miscellaneous_items3,fees_amount3,car_no,box_no];
    if(!(aa[0]&&aa[7]&&aa[8])){
        alert('请填写完指令号，车号，箱号');
        return 0;
    }
    var Ttr1=feiyonghuizong(aa);
    $("#tbody1").prepend(Ttr1);
    alert("添加成功");
})
//给提交添加按钮
    $(document).on("click", ".btn.blue.mini", function(e){
        var Ttr=$(this).parent().parent();//该按钮的tr
        bb=Th_T(Ttr);
        for(var i=0;i<17;i++){
            aa[i]=bb[i+2];
        }
        var Ttr0=zafeijiesuan(aa);
        $("#tbody0").append(Ttr0);
        Ttr.css('display','none');
    });
//给删除按钮添加事件
    $(document).on("click", ".btn.red.mini", function(e){
        var Ttr=$(this).parent().parent();//该按钮的tr
        aa=Th_T(Ttr);
        $('#'+aa[5]).attr('style','');
        Ttr.remove();
})
$(document).on("click", "#btn-modal", function(e){
    var table1=$('#tbody0');
    table1.each(function(){//获取二维数组，主要使提交上去的表格的内容
        var i=0;
        $(this).find('tr').each(function(){
            aa[i]=Th_T($(this));
            i++;
        })
    });
    var cc=$(".btn.red.mini").length;
    var Tend=$('.muted:first-child');
    for(i=0;i<cc;i++){
        var tr_1=$("<tr class='muted'></tr>");//创建真实需要的tr
        tr_1.attr('id',aa[i][5]);
        var list=$('#'+aa[i][5]).html();
        list=tr_1.append(list);
        if(Tend>0){
            Tend.before(list);
        }else{
            $('#tbody1').append(list);
        }
        $('#'+aa[i][5]).remove();
        $('.btn.red.mini:first-child').parent().parent().remove();
    }

})

function feiyonghuizong(aa){//创建费用汇总表格,aa为传入的数组
    var Ttd='<tr '+'id="'+aa[0]+'">'//aa[0]为指令号
    Ttd+="<td><span class=\"row-details row-details-close\"></span></td>"
    Ttd+="<td class=\"\"><a href=\"#\" class=\"btn blue mini \">提交</a></td>"
    /*前面相关项目*/
    Ttd+='<td class="">'+'2017/10/22'+'</td>';
    Ttd+='<td class="">'+'某某'+'</td>';
    Ttd+='<td class="">'+aa[7]+'</td>';
    Ttd+='<td class="">'+aa[0]+'</td>';
    Ttd+='<td class="">'+'北京'+'</td>';
    Ttd+='<td class="">'+aa[8]+'</td>';
    Ttd+='<td class="">'+'50元'+'</td>';
    Ttd+='<td class="">'+'50元'+'</td>';
    Ttd+='<td class="">'+'xxx'+'</td>';
    Ttd+='<td class="">'+'xxx'+'</td>';
    Ttd+='<td class="">'+'xxx'+'</td>';
    /* 杂费项目*/
    Ttd+='<td class="">'+aa[1]+'</td>';
    Ttd+='<td class="">'+aa[2]+'</td>';
    Ttd+='<td class="">'+aa[3]+'</td>';
    Ttd+='<td class="">'+aa[4]+'</td>';
    Ttd+='<td class="">'+aa[5]+'</td>';
    Ttd+='<td class="">'+aa[6]+'</td>';
    /*利润*/
    Ttd+='<td class="">'+'xx'+'</td>';
    Ttd+='</tr>';
    return Ttd;
}
function zafeijiesuan(aa){//创建杂费结算表格,aa为传入的数组
    var Ttd='<tr >'
    Ttd+="<td><span class=\"row-details row-details-close\"></span></td>"

    Ttd+="<td><a href=\"#\" class=\"btn red mini icn-only\">删除</a></td>"
    /*前面相关项目*/
    for(var i=0;i<17;i++){
        Ttd+='<td class="">'+aa[i]+'</td>';
    }
    Ttd+='</tr>'
    return Ttd;
}