const GetImageRelativePath = () => {
  if (window.location.host.includes('localhost'))
    return '/img/';
  
  return '/./site-fotografia/public/img/';
}

export default GetImageRelativePath;