{{- $defaultRivision := now.Unix  -}}
{{- $langs := slice -}}
{{- $pages := slice -}}

{{- partial "helpers/read-dir" (dict "Path" "/static" "Scratch" $.Scratch) -}}

{{- $paths := slice "manifest.json" -}}
{{- $layouts := slice "offline" -}}
{{- range $site := $.Sites -}}
  {{- $langs = $langs | append $site.LanguagePrefix -}}
  {{ range where $site.Pages "Layout" "in" $layouts }}
    {{- $pages = $pages | append (dict "url" .Permalink "revision" $defaultRivision) -}}
  {{- end -}}
  {{ range $path := $paths }}
    {{- $pages = $pages | append (dict "url" ( printf "%s/%s" $site.LanguagePrefix $path | absURL) "revision" $defaultRivision) -}}
  {{- end -}}
{{- end -}}

const langs = JSON.parse('{{ $langs | jsonify }}');
const pages = JSON.parse('{{ $pages | jsonify }}');
const assets = JSON.parse('{{ $.Scratch.Get "hbs-assets" | jsonify }}');
const multilingual = {{ if eq (len .Sites) 1 }}false{{ else }}true{{ end }};
const config = {
    version: {{ now.Unix }},
    langs: langs,
    pages: pages,
    assets: assets
};
