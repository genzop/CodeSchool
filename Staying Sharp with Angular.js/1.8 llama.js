var newLlamaRecruit = {
  llamaOne: 'Larry Llama'
};

$http({ method: 'POST', url: '/llamas.json', data: newLlamaRecruit});