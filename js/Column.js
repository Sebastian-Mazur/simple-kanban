function Column(name) {
    var self = this;

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();

    function createColumn() {
        var $column = $('<div>').addClass('column');
        var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
        var $columnCardList = $('<ul>').addClass('column-card-list');
        var $columnDelete = $('<button>').addClass('btn-delete-column').text('Usuń kolumnę');
        var $columnAddCard = $('<button>').addClass('btn-add-card').text('Dodaj kartę');

        $columnDelete.click(function () {
            self.removeColumn();
        });

        $columnAddCard.click(function (event) {
            event.preventDefault();
            self.addCard(new Card(prompt('Enter the name card')));
        });

        $column.append($columnTitle)
            .append($columnDelete)
            .append($columnAddCard)
            .append($columnCardList);

        return $column;
    }
}

Column.prototype = {
    addCard: function (card) {
        this.$element.children('ul').append(card.$element);
    },
    removeColumn: function () {
        this.$element.remove();
    }
};