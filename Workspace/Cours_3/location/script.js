'use strict';

if (navigator.geolocation) {

    const successCallBack = (position) => {
        console.log('position', position)
        const link = document.createElement('a');
        link.setAttribute('href',`https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coords.longitude}`);
    
        link.setAttribute('target','_blank');

        link.innerText='Click here to see your position'

        document.querySelector('body').appendChild(link);
    };

    const errorCallBack = (error) => {
        console.log('error', error)
        const GEO_ERRORS = {
            PERMISSION_DENIED: 1,
            POSITION_UNAVAILABLE: 2,
            TIMEOUT: 3
        }
        if (error.code === GEO_ERRORS.PERMISSION_DENIED){
            alert('PLEASE LET ME KNOW WERE YOU ARE HONEY')
        }
    };

    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
}