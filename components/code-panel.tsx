/**
 * Hand-tinted code panel — a gold hairline card on the indigo band.
 * Highlighting is static markup; no runtime highlighter is needed.
 */

const c = {
  kw: "text-[#e39a8a]", // const, return
  fn: "text-[#e8dff2]", // identifiers
  prop: "text-[#c3b6da]", // object keys
  str: "text-[#d6a85c]", // string literals
  punct: "text-[#9a8cbd]", // braces, arrows, semicolons
  comment: "text-[#7a67a4]",
};

export function CodePanel() {
  return (
    <div className="relative rounded-2xl border border-gold-soft/35 bg-white/[0.025] px-6 py-7 md:px-8 md:py-9">
      <pre className="overflow-x-auto font-mono text-[0.8125rem] leading-[1.75] md:text-[0.875rem]">
        <code>
          <span className={c.kw}>const</span>{" "}
          <span className={c.fn}>infinite</span>{" "}
          <span className={c.punct}>=</span>{" "}
          <span className={c.punct}>(</span>
          <span className={c.prop}>purpose</span>
          <span className={c.punct}>) =&gt; {"{"}</span>
          {"\n  "}
          <span className={c.kw}>return</span>{" "}
          <span className={c.punct}>{"{"}</span>
          {"\n    "}
          <span className={c.prop}>strategy</span>
          <span className={c.punct}>:</span>{" "}
          <span className={c.str}>&quot;aligned&quot;</span>
          <span className={c.punct}>,</span>
          {"\n    "}
          <span className={c.prop}>design</span>
          <span className={c.punct}>:</span>{" "}
          <span className={c.str}>&quot;elegant&quot;</span>
          <span className={c.punct}>,</span>
          {"\n    "}
          <span className={c.prop}>build</span>
          <span className={c.punct}>:</span>{" "}
          <span className={c.str}>&quot;scalable&quot;</span>
          <span className={c.punct}>,</span>
          {"\n    "}
          <span className={c.prop}>evolve</span>
          <span className={c.punct}>:</span>{" "}
          <span className={c.str}>&quot;relentless&quot;</span>
          {"\n  "}
          <span className={c.punct}>{"};"}</span>
          {"\n"}
          <span className={c.punct}>{"};"}</span>
          {"\n\n"}
          <span className={c.fn}>anantaha</span>
          <span className={c.punct}>.</span>
          <span className={c.fn}>partnership</span>
          <span className={c.punct}>({"{"}</span>
          {"\n  "}
          <span className={c.prop}>with</span>
          <span className={c.punct}>:</span>{" "}
          <span className={c.fn}>you</span>
          <span className={c.punct}>,</span>
          {"\n  "}
          <span className={c.prop}>for</span>
          <span className={c.punct}>:</span>{" "}
          <span className={c.fn}>purpose</span>
          <span className={c.punct}>,</span>
          {"\n  "}
          <span className={c.prop}>outcomes</span>
          <span className={c.punct}>:</span>{" "}
          <span className={c.str}>&quot;infinite&quot;</span>
          {"\n"}
          <span className={c.punct}>{"}).then("}</span>
          <span className={c.prop}>result</span>
          <span className={c.punct}> =&gt; {"{"}</span>
          {"\n  "}
          <span className={c.fn}>console</span>
          <span className={c.punct}>.</span>
          <span className={c.fn}>log</span>
          <span className={c.punct}>(</span>
          <span className={c.prop}>result</span>
          <span className={c.punct}>);</span>
          {"\n  "}
          <span className={c.comment}>{"// Ready"}</span>
          {"\n"}
          <span className={c.punct}>{"});"}</span>
        </code>
      </pre>

      <div className="mt-8 flex items-center justify-end gap-2.5">
        <span
          aria-hidden="true"
          className="h-[7px] w-[7px] rounded-full bg-gold-soft"
        />
        <span className="text-[0.8125rem] tracking-[0.02em] text-on-dark">
          Ready
        </span>
      </div>
    </div>
  );
}
