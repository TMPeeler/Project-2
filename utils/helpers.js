module.exports = {
    format_date:(date) => {
        return date.toLocaleDateString();
    },
    format_rating:(score) => {
        switch (score) {
            case 1: 
            System.out.println('🍺')
                break;
            case 2:
            System.out.println('🍺🍺')
                break;
            case 3:
            System.out.println('🍺🍺🍺')
                break;
            case 4:
            System.out.println('🍺🍺🍺🍺')
                break;
            case 5:
            System.out.println('🍺🍺🍺🍺🍺')
                break;
        }
    }
};