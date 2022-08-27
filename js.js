//Require prepend jquery first

//getlist


//button add
let count_colulms = document.querySelectorAll('table>thead>tr>th')
count_colulms = count_colulms ? count_colulms.length : 0


$(document).ready(function() {

    const field_names = []
    $('table>thead>tr>').each(function(i, e){
        field_names.push($(e).text())
    });

    $anchorPoint = $('div#form-group')

    $divGroup = $('<div>', {
        class: 'mb-3 row',
    })
    $divLabel = $('<label>', {
        class: 'col-sm-2 col-form-label',
        text: 'Password',
    })

    $divInput = $('<div>', {
        class: 'col-sm-10',
    }).append($('<input>', {
        type: 'text',
        class: 'form-control',
        name: 'data[]',
    }))

    $('button#add').click(function(){
        let isFull = $('div#form-group>div.row').length
        if (isFull == count_colulms) {
            console.log('return');
            return
        }
        for (let i = 0; i < count_colulms; i++) {
            console.log(i);
            $divLabel.text(field_names[i])
            $divGroup.append($divLabel)
            $divGroup.append($divInput)
            $anchorPoint.append($divGroup)
        }
    });
});
