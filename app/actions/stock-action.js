import alt from '../alt';

class StockActions {
    updateStocks() {
        return true;
    }

    addStock(stock) {
        return stock;
    }

    deletestock(stock) {
        return stock;
    }

    selectStock(stock) {
        return stock;
    }

    selectProperty(property) {
        return property;
    }
}

module.exports = alt.createActions(StockActions);