class View {
    constructor (game, $el) {
        this.game = game;
        this.$el = $el;
        this.setupTowers();
    }
    
    setupTowers () {
        for (let i = 0; i < 3; i++) {
            let $ul = $("<ul>");
            for (let j = 0; j < 3; j++) {
                let $li = $("<li>");
                $li.data("pos", [i,j]);
                $ul.append($li);
            };
            this.$el.append($ul);
        };
        
    }

    render () {
        
    }
}

module.exports = View;