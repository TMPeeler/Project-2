module.exports = {
    format_date:(date) => {
        return date.toLocaleDateString();
    },
    format_rating:(score) => {
        switch (score) {
            case 1: 
            return '🍺';
            case 2:
            return '🍺🍺';
            case 3:
            return '🍺🍺🍺';
            case 4:
            return '🍺🍺🍺🍺';
            case 5:
            return '🍺🍺🍺🍺🍺';
        }
    },
};