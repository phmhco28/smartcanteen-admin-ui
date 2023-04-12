$(function() {
    $.ajax({
        url: "http://localhost:3000/api/v1/account",
        type: "GET",
        xhrFields: { withCredentials: true },
        dataType: "json",
        success: function(data) {
            // Render the data on the webpage
            renderData(data);
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error fetching data: " + errorThrown);
        }
    });

    function renderData(data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += "<td>" + data[i]._id + "</td>";
            html += "<td>" + data[i].username + "</td>";
            html += "<td>" + data[i].password + "</td>";
            html += "<td>" + data[i].fullName + "</td>";
            html += "<td>" + data[i].email + "</td>";
            html += "<td>" + data[i].phone + "</td>";
            html += "<td>" + data[i].amount + "</td>";
            html += "<td>" + data[i].isVerify + "</td>";
            html += "<td>" + data[i].isActive + "</td>";
        }
        $("#data-table").html(html);
    }
});