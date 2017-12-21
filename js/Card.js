function Card(description) {
    var self = this;

    this.id = randomString();
    this.description = description;
    this.$element = createCard();
    
    console.log(this.id);

    function createCard() {
        var $card = $('<li>').addClass('card');
        var $cardDescription = $('<p>').addClass('card-description').text(self.description);
        var $cardBtnGreen = $('<button>').addClass('btn-green');
        var $cardBtnYellow = $('<button>').addClass('btn-yellow');
        var $cardBtnRed = $('<button>').addClass('btn-red');
        var $cardDelete = $('<button>').addClass('btn-delete').text('Usuń kartę');

        $cardDelete.click(function() {
            self.removeCard();
        });  

        $cardBtnGreen.click(function() {
            $cardBtnGreen.css('background-color', '#00ff04');
            $cardBtnYellow.css('background-color', '#f0f5ae');
            $cardBtnRed.css('background-color', '#f19191');
        })

        $cardBtnYellow.click(function() {
            $cardBtnGreen.css('background-color', '#aef7ae');
            $cardBtnYellow.css('background-color', '#eeff00');
            $cardBtnRed.css('background-color', '#f19191');
        })

        $cardBtnRed.click(function() {
            $cardBtnGreen.css('background-color', '#aef7ae');
            $cardBtnYellow.css('background-color', '#f0f5ae');
            $cardBtnRed.css('background-color', '#ff0000');
        })
        
        $card.append($cardDelete)
            .append($cardBtnGreen)
            .append($cardBtnYellow)
            .append($cardBtnRed)
            .append($cardDescription);
        return $card;
        
    }
}

Card.prototype = {
    removeCard: function() {
        this.$element.remove();        
    }
}