exports.UsernametoURL = function (username, social_site_name) {

    if (social_site_name === 'facebook') {
        return `https://facebook.com/${username}`
    }
    if (social_site_name === 'instagram') {
        return `https://instagram.com/${username}`
    }
    if (social_site_name === 'twitter') {
        return `https://twitter.com/${username}`
    }
    if (social_site_name === 'linkedin') {
        return `https://www.linkedin.com/in/${username}`
    }
    if (social_site_name === 'github') {
        return `https://github.com/${username}`
    }
    if (social_site_name === 'googleplus') {
        return `https://plus.google.com/+${username}`
    }
    if (social_site_name === 'reddit') {
        return `https://www.reddit.com/user/${username}`
    }
    if (social_site_name === 'medium') {
        return `https://medium.com/@sushantshek20${username}`
    } 
    if (social_site_name === 'product-hunt') {
        return `https://www.producthunt.com/${username}`
    }  else {
        return 'Social Site Name is Unknown.';
    }
};