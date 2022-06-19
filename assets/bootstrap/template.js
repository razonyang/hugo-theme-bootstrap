{{- $url := urls.Parse .Site.BaseURL }}
{{- $path := strings.TrimPrefix "/" $url.Path }}
{{- $path = strings.TrimSuffix "/" $path }}
{{- if $path }}
  {{- $path = printf "%s:" $path -}}
{{- end }}
const items = ['theme', 'palette'];
items.forEach(function (key) {
const value = localStorage.getItem('hbs:{{ $path }}' + key);
  if (value) {
    document.body.parentElement.setAttribute('data-' + key, value);
  }
});
