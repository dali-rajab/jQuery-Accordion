/*
 *  jQuery accordion - v1.0.1
 *  jQuery plugin to create accordions
 *  https://github.com/dali-rajab/jQuery-Accordion
 *
 *  Made by Mohamed Ali Rajab
 *  Under MIT License
 */

;( function( $, window, document, undefined ) {
	"use strict";

		var pluginName = "accordion",
			defaults = {
				collapsibles: ".collapsible",
				togglers: ".toggler",
				activatedAccordionClass: "jquery-accordion",
		};

		function Plugin ( element, options ) {
			this.element = element;
			this.options = options;

			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}


		$.extend( Plugin.prototype, {
			init: function() {

                if (typeof this.options == "object" || this.options == null) {
                	this.create();
                	return;
                }
                if (typeof this.options == "string") {
                    if (typeof this[this.options] === "function") {
                        this[this.options]();
                    } else {
                        console.error("You can't instanciate an " + pluginName + " object by passing this parameter : \"" + this.options + '".');
                    }
                }

			},
			create: function() {
				if (this.options == "create") {
				  return; // this method is not accessible from outside
				}

                var collapsibles = this.settings.collapsibles;
                var togglers = this.settings.togglers;
                var activatedAccordionClass = this.settings.activatedAccordionClass;

				$( this.element ).find(collapsibles).hide();

				$( this.element ).find(togglers).on("click", {thisElt : $( this.element ), collapsibles : collapsibles, togglers : togglers}, this.togglersLogic);

				$( this.element ).addClass(activatedAccordionClass);
			},
			destroy: function() {
				var collapsibles = this.settings.collapsibles;
				var togglers = this.settings.togglers;
				var activatedAccordionClass = this.settings.activatedAccordionClass;

				$( this.element ).find(collapsibles).css('display', '').removeClass('accordion-show');
				$( this.element ).find(togglers).off("click", this.togglersLogic);

                $( this.element ).removeClass(activatedAccordionClass).removeData( "plugin_" + pluginName );
			},
			togglersLogic: function( event ) {
				if (this.options == "togglersLogic") {
				  return; // this method is not accessible from outside
				}
				event.preventDefault();

				var clickedTogglerElt = $(event.currentTarget);
				var collapsibles = event.data.collapsibles;
				var thisElt = event.data.thisElt;

				if (clickedTogglerElt.next(collapsibles).hasClass('accordion-show')) {
					clickedTogglerElt.next(collapsibles).removeClass('accordion-show').slideUp(350);
				} else {
					clickedTogglerElt.closest(thisElt).find(collapsibles).removeClass('accordion-show').slideUp(350);
					clickedTogglerElt.next(collapsibles).toggleClass('accordion-show').slideToggle(350);
				}
			}
		} );

		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
			    if ( $.data( this, "plugin_" + pluginName ) ) {
			        if ( Plugin.prototype[options] ) {
			            $.data(this, 'plugin_' + pluginName)[options]();
			        } else if ( typeof options == "string" ) {
			            console.error('The method "' + options + '" is not defined');
			        }
			    } else {
                    if ( options !== "destroy" ) {
                        $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
                    }
                }

			});
		};

} )( jQuery, window, document );
