{{- $params := $.Site.Params -}}
window.params = {
    codeBlock: {
        maxLines: {{ default 7 $params.codeBlock.maxLines }},
        lineNos: {{ default true $params.codeBlock.lineNos }},
    },
    utterances: {
        theme: {{ default "" $params.utterances.theme | printf "%q" }},
    },
    katex: {{ if $params.katex }}{{ $params.katex | jsonify }}{{ else }}{{ printf "{}" }}{{ end }},
    mermaid: {{ if $params.mermaid }}{{ $params.mermaid | jsonify }}{{ else }}{{ printf "{}" }}{{ end }}
}
