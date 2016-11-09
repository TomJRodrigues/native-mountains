var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Mount Hood|Mount Adams|Mount St. Helens|Mount McKinley|Mount Rainier|Mount Everest/gi, function(w){

                switch(w){
                    case 'Mount Hood':
                        return 'Wy\'east';

                    case 'Mount Adams':
                        return 'Pahto';

                    case 'Mount St. Helens':
                        return 'Loowit';

                    case 'Mount McKinley':
                        return 'Denali';

                    case 'Mount Rainier':
                        return 'Tacoma';

                    case 'Mount Everest':
                        return 'Chomolungma';

                    case 'Mount Baker':
                        return 'Kulshan';
/*
                    case 'Mount Shasta'
                        return 'Uytaahkoo';

                    case 'Devils Tower'
                        return 'Bear Lodge';
*/
                }
            });


            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}