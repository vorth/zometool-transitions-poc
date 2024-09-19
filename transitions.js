

const animateGoingHome = ( oldAnim, newAnim ) => () =>
{
  const link = document .querySelector( '.moving-image' );
  link .classList .remove( oldAnim );
  link .addEventListener( 'animationend', () => {
    // navigate home
    window.location .assign( "./index.html" );

  } );
  link .classList .add( newAnim );
}

document .getElementById( 'play-to-home' ) ?.addEventListener( 'click',
  animateGoingHome( 'home-play', 'play-home' ) );

document .getElementById( 'learn-to-home' ) ?.addEventListener( 'click',
  animateGoingHome( 'home-learn', 'learn-home' ) );

document .getElementById( 'buy-to-home' ) ?.addEventListener( 'click',
  animateGoingHome( 'home-buy', 'buy-home' ) );
    