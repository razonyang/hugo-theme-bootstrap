{{- $defaultRivision := now.Unix  -}}
{{- $pages := slice -}}
{{- range $.Site.AllPages -}}
  {{- $revision := $defaultRivision -}}
  {{- with .File -}}
      {{- $revision = .UniqueID -}}
  {{- end -}}
  {{- $pages = $pages | append (dict "url" .Permalink "revision" $revision) -}}
{{- end -}}

{{- partial "helpers/read-dir" (dict "Path" "/static" "Scratch" $.Scratch) -}}

{{- range $.Site.Languages -}}
  {{- $pages = $pages | append (dict "url" (printf "/%s/%s" .Lang "manifest.json" | absURL) "revision" $defaultRivision)  -}}
{{- end -}}

const pages = JSON.parse('{{ $pages | jsonify }}');
const assets = JSON.parse('{{ $.Scratch.Get "hbs-assets" | jsonify }}');
const multilingual = {{ if eq (len .Sites) 1 }}false{{ else }}true{{ end }};
const config = {
    version: {{ now.Unix }},
    multilingual: {{ if eq (len .Sites) 1 }}false{{ else }}true{{ end }},
    pages: pages,
    assets: assets
};
