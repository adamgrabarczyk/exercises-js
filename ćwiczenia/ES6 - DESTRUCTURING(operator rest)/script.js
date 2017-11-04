

//operator REST

function getValue(...Args) {     // ... trzykropek mowi ze bierze pod uwage wszystkie argumenty ktore zostana przekazane do funkcji

    var values = Args.sort();

    return values;

}




alert(getValue('string', 'boolean', 'number'));