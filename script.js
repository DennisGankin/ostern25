document.addEventListener("DOMContentLoaded", function() {
    const form  = document.getElementById('submitPassword');

    form.addEventListener('click', function() {
        // stop form submission
        // var gas = parseFloat(document.getElementById("gasPrice").value);
        var first = document.getElementById("first").value;
        var second = document.getElementById("second").value;
        var third = document.getElementById("third").value;
        /** 
         * gas_per_km * gas  * (dist * 2) == train
         * gas = train /((dist*2)*gas_per_km)
         */


        if (first!=1 || second!=4 || third!=5) {
            var toastLiveExample = document.getElementById('pwtoast')
            var toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
        } else {
            /*window.location.href=""*/
            var toastLiveExample = document.getElementById('righttoast')
            var toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
        }

        //alert(gas.toFixed(3));
        //document.getElementById("result").innerHTML = "Break even gas price at " + gas.toFixed(3) + "€. If the gas price is below that value. Taking the car is cheaper.";
    });
});