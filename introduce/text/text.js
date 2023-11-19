( function( $ ) {

    $.fn.spanLetters = function() {

        this.each( function() {   
            
            var words, i, text;
          
            words = $( this ).text().split( '' );

            for ( i = 0; i in words; i++ ) {
                words[i] = '<span class="sl' + ( i + 1 ) + ' span-letter">' + words[i] + '</span>'
            };

            text = words.join( '' );

            $( this ).html( text );
        })
    }
}( jQuery ));

$( ".the-goods" ).spanLetters();