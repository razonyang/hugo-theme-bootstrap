{{- $params := $.Site.Params -}}
window.params = {
    codeBlock: {{ $params.codeBlock | jsonify }},
}
