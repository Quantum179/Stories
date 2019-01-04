export const formatParams = (params) => {
  var parts = [];
  for (var key in params) {
      if (params.hasOwnProperty(key)) {
          parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
      }
  }
  return parts.join("&");
}

