function newAbortSignal(timeoutMs) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);

  return abortController.signal;
}

axios.get('/foo/bar', {
   signal: newAbortSignal(5000) // Request sẽ được huỷ sau 5 giây
   //Ngoài việc sử dụng AbortController, chúng ta cũng có thể sử dụng một API khác là AbortSignal.timeout()
   //signal: AbortSignal.timeout(5000) 
}).then(function(response) {
   //...
});