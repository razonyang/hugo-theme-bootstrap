{{- $params := $.Site.Params -}}
window.params = {
    codeBlock: {
        maxLines: {{ default 7 $params.codeBlock.maxLines }},
        lineNos: {{ default true $params.codeBlock.lineNos }},
    },
    utterances: {
        repo: {{ default "" $params.utterances.repo | printf "%q" }},
        theme: {{ default "" $params.utterances.theme | printf "%q" }},
        issueTerm: {{ default "pathname" $params.utterances.issueTerm | printf "%q" }},
        label: {{ default "comment" $params.utterances.label | printf "%q" }},
    },
    katex: {{ if $params.katex }}{{ $params.katex | jsonify }}{{ else }}{{ printf "{}" }}{{ end }},
    mermaid: {{ if $params.mermaid }}{{ $params.mermaid | jsonify }}{{ else }}{{ printf "{}" }}{{ end }}
}
