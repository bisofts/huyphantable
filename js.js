const items = JSON.parse(localStorage.getItem('items') || '[]');
if (items.length > 0) {
    $table = document.querySelector('table>tbody')
    items.forEach(function (e){
        let $tr = document.createElement('tr')
        for (let entry in e) {
            let $td = document.createElement('td')
            $td.textContent = e[entry]
            $tr.appendChild($td)
        }
        $table.appendChild($tr)
    });
}

let count_columns = document.querySelectorAll('table>thead>tr>th')
count_columns = count_columns ? count_columns.length : 0

let field_names = [];
document.querySelectorAll('table>thead>tr>th').forEach(function(e, i){
    field_names.push(e.textContent)
})
let $anchorPoint = document.querySelector('form#form-group')

let $submitButton = document.createElement('button')
$submitButton.textContent = 'Submit'
$submitButton.classList.add('btn', 'btn-sm', 'btn-primary')

//add button clicked
document.querySelector('button#add').addEventListener('click', function () {
    let isFull = document.querySelectorAll('form#form-group>div.mb-3.row')
    isFull = isFull ? isFull.length : 0
    if (isFull === count_columns) return

    for (var i = 0; i < count_columns; i++) {
        let $divGroup = document.createElement('div')
        $divGroup.classList.add('mb-3', 'row')

        let $divLabel = document.createElement('label')
        $divLabel.textContent = field_names[i]
        $divLabel.classList.add('col-sm-2', 'col-form-label')

        let $divInput = document.createElement('div')
        $divInput.classList.add('col-sm-10')

        let $input = document.createElement('input')
        $input.classList.add('form-control')
        $input.setAttribute('type', 'text')
        $input.setAttribute('name', field_names[i].toLowerCase())
        $divInput.appendChild($input)
        $divGroup.appendChild($divLabel)
        $divGroup.appendChild($divInput)
        $anchorPoint.appendChild($divGroup)
    }
    $anchorPoint.appendChild($submitButton)
});

//form submitted
document.querySelector('form#form-group').addEventListener('submit', function (e){
    e.preventDefault()
    let data = new FormData($anchorPoint);
    let row = {}
    for (let entry of data) {
        row[entry[0]] = entry[1]
    }
    items.push(row)
    localStorage.setItem('items', JSON.stringify(items))
    location.reload()
})