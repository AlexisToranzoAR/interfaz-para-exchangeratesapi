jQuery.datetimepicker.setLocale('es')
        $('#fecha').datetimepicker({
            timepicker: false,
            datepicker: true,
            format: 'Y-m-d',
            maxDate: 0,
            minDate: '1999-01-04',
            yearStart: '1999',
            yearEnd: '2020',
        })