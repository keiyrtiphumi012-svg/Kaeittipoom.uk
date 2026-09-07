export default function MatrixRegistryCyberpunk() {
  const nodes = [
    {
      id: 'core-kernel-001',
      name: 'CORE-KERNEL',
      cpu: 12,
      latency: 1.12,
      vector: -0.02,
      status: 'ONLINE',
    },
    {
      id: 'pillar-prime-002',
      name: 'PILLAR-PRIME',
      cpu: 18,
      latency: 1.45,
      vector: 0.01,
      status: 'ONLINE',
    },
    {
      id: 'network-hub-003',
      name: 'NETWORK-HUB',
      cpu: 24,
      latency: 2.21,
      vector: 0.03,
      status: 'ONLINE',
    },
    {
      id: 'ring-stabilizer-004',
      name: 'RING-STABILIZER',
      cpu: 16,
      latency: 1.78,
      vector: -0.01,
      status: 'ONLINE',
    },
    {
      id: 'data-layer-005',
      name: 'DATA-LAYER',
      cpu: 28,
      latency: 2.91,
      vector: 0.05,
      status: 'ONLINE',
    },
    {
      id: 'sync-module-006',
      name: 'SYNC-MODULE',
      cpu: 14,
      latency: 1.32,
      vector: -0.02,
      status: 'ONLINE',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-cyan-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_60%)]" />

      <div className="relative z-10 flex h-screen">
        <aside className="w-72 border-r border-cyan-500/20 bg-black/70 backdrop-blur-xl p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-black tracking-widest text-green-400 mb-2">
              MATRIX REGISTRY
            </h1>

            <p className="text-cyan-500 text-sm mb-8">
              REAL-TIME SYSTEM REGISTRY
            </p>

            <div className="space-y-3">
              {['REGISTRY', 'NODES', 'DIAGNOSTICS', 'ANALYTICS', 'ALERTS', 'SETTINGS'].map((item, i) => (
                <div
                  key={item}
                  className={`rounded-xl px-4 py-3 border cursor-pointer transition-all ${
                    i === 0
                      ? 'border-cyan-400 bg-cyan-500/10 text-cyan-300'
                      : 'border-zinc-900 text-zinc-500 hover:border-cyan-500/20 hover:text-cyan-200'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-cyan-500/20 rounded-3xl p-5 bg-cyan-500/5">
            <div className="w-52 h-52 rounded-full border-4 border-cyan-400/30 mx-auto flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border border-cyan-300/50 flex items-center justify-center">
                <div>
                  <div className="text-center text-green-400 text-5xl font-black">
                    99.37%
                  </div>

                  <div className="text-center text-cyan-300 mt-2 text-sm tracking-widest">
                    STABILITY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-8 overflow-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-5xl font-black text-cyan-300 tracking-widest">
                SYSTEM REGISTRY
              </h2>

              <p className="text-zinc-500 mt-2">
                Real-time overview of all matrix nodes and subsystems
              </p>
            </div>

            <div className="flex gap-4">
              <div className="bg-black border border-cyan-500/20 rounded-2xl px-6 py-4">
                <div className="text-xs text-zinc-500 mb-1">LIVE</div>
                <div className="text-green-400 font-black">CONNECTED</div>
              </div>

              <div className="bg-black border border-cyan-500/20 rounded-2xl px-6 py-4">
                <div className="text-xs text-zinc-500 mb-1">AUTO REFRESH</div>
                <div className="text-cyan-300 font-black">3 SEC</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-5 mb-8">
            <TopCard title="TOTAL NODES" value="12" color="text-cyan-300" />
            <TopCard title="ONLINE" value="11" color="text-green-400" />
            <TopCard title="WARNING" value="1" color="text-yellow-400" />
            <TopCard title="OFFLINE" value="0" color="text-red-400" />
            <TopCard title="AVG LATENCY" value="2.34ms" color="text-cyan-300" />
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-5">
                {nodes.map((node) => (
                  <div
                    key={node.id}
                    className="bg-black/70 border border-green-500/20 rounded-3xl p-5 shadow-2xl"
                  >
                    <div className="flex justify-between items-start mb-5">
                      <div>
                        <h3 className="text-2xl font-black text-cyan-300">
                          {node.name}
                        </h3>

                        <p className="text-xs text-zinc-500 mt-1">
                          ID: {node.id}
                        </p>
                      </div>

                      <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-black">
                        {node.status}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <Metric label="CPU" value={`${node.cpu}%`} />
                      <Metric label="LATENCY" value={`${node.latency} ms`} />
                      <Metric label="VECTOR" value={`${node.vector}`} />
                    </div>

                    <div className="h-2 rounded-full overflow-hidden bg-zinc-900 mb-4">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500"
                        style={{ width: `${node.cpu}%` }}
                      />
                    </div>

                    <div className="h-20 rounded-2xl bg-black border border-cyan-500/10 flex items-end overflow-hidden px-2">
                      {[12, 24, 18, 35, 22, 30, 14, 29, 18, 25, 19, 32, 24, 16].map((v, i) => (
                        <div
                          key={i}
                          className="flex-1 mx-[1px] bg-green-400/80 rounded-t"
                          style={{ height: `${v * 2}px` }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black border border-cyan-500/20 rounded-3xl p-6">
                <h3 className="text-2xl font-black text-cyan-300 mb-6">
                  SYSTEM STATUS
                </h3>

                <div className="w-72 h-72 mx-auto rounded-full border-4 border-cyan-400/30 flex items-center justify-center mb-8">
                  <div className="w-56 h-56 rounded-full border border-cyan-300/50 flex items-center justify-center">
                    <div>
                      <div className="text-center text-green-400 text-6xl font-black">
                        99.37%
                      </div>

                      <div className="text-center text-cyan-300 mt-2 tracking-widest">
                        OPTIMAL
                      </div>
                    </div>
                  </div>
                </div>

                <StatusBar label="CPU LOAD" value="19%" width="19%" />
                <StatusBar label="MEMORY" value="42%" width="42%" />
                <StatusBar label="TEMPERATURE" value="41.2°C" width="41%" />
                <StatusBar label="UPTIME" value="2d 14h" width="88%" />
              </div>

              <div className="bg-black border border-cyan-500/20 rounded-3xl p-6">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-2xl font-black text-cyan-300">
                    SYSTEM LOGS
                  </h3>

                  <span className="text-green-400 text-sm">
                    VIEW ALL
                  </span>
                </div>

                <div className="space-y-4 text-sm font-mono">
                  {[
                    'Registry data synced',
                    'Auto-balancing complete',
                    'AI-PROCESSOR latency high',
                    'Node sync successful',
                    'Heartbeat received',
                    'System stability optimal',
                  ].map((log, i) => (
                    <div key={i} className="flex items-center gap-3 border-b border-zinc-900 pb-3">
                      <div className="w-2 h-2 rounded-full bg-green-400" />

                      <div className="text-zinc-400">{log}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function TopCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className="bg-black border border-cyan-500/20 rounded-3xl p-5">
      <div className="text-xs text-zinc-500 mb-2 tracking-widest">
        {title}
      </div>

      <div className={`text-4xl font-black ${color}`}>
        {value}
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="text-xs text-zinc-500 mb-1">{label}</div>
      <div className="text-lg text-green-400 font-black">{value}</div>
    </div>
  );
}

function StatusBar({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-zinc-500">{label}</span>
        <span className="text-cyan-300">{value}</span>
      </div>

      <div className="h-2 rounded-full overflow-hidden bg-zinc-900">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-green-400"
          style={{ width }}
        />
      </div>
    </div>
  );
}
