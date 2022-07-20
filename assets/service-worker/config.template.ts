{{- $homepage := "/" }}
{{- $langs := slice }}
{{- $fallbacks := slice }}

{{- $paths := slice "/manifest.json" }}
{{- $pages := slice "/offline" }}
{{- range $site := $.Sites }}
  {{- if eq $homepage "/" }}{{ with $site.GetPage "/" }}{{ $homepage = .Permalink }}{{ end }}{{ end }}
  {{- $langs = $langs | append $site.Language.Lang }}
  {{- range $pages }}
    {{- with $site.GetPage . }}{{- $fallbacks = $fallbacks | append .Permalink }}{{ end }}
  {{- end }}
  {{ range $path := $paths }}
    {{- $fallbacks = $fallbacks | append (printf "%s/%s" $site.LanguagePrefix $path | absURL) }}
  {{- end }}
{{- end }}

console.log('{{ .Site.Params }}')
const config = {
  homepage: '{{ $homepage }}',
  langs: JSON.parse('{{ $langs | jsonify }}'),
  fallbacks: JSON.parse('{{ $fallbacks | jsonify }}'),
  fallbacksCacheName: 'fallbacks',
  imageCacheName: 'images',
  pageCacheName: 'pages',
  scriptCacheName: 'scripts',
  styleCacheName: 'styles',
}
console.debug('service worker config:', config);
