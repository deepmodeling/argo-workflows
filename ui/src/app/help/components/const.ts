export const clusterTest = `{
  "host" : "https://workflow.test.dp.tech/",
  "s3_endpoint" : "39.106.93.187:30900",
  "k8s_api_server" : "https://10.32.118.117:6443",
  "token" : "eyJhbGciOiJSUzI1NiIsImtpZCI6IlhMRGZjbnNRemE4RGQyUXRMZG1MX3NXeG5TMzlQTnhnSHZkS1lGM25SODAifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJhcmdvIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImFyZ28tc2VydmVyLXRva2VuLXpyNnFqIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFyZ28tc2VydmVyIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiNThmYzM2YTItMWM1MC00N2VhLWE4ZDEtZmIxYzczOWY5ZjY5Iiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50OmFyZ286YXJnby1zZXJ2ZXIifQ.NGPqb4OAgyaGPDkyY1on7B-KQgnjioe-lmnm5PPEFMxfT6c__ND-Ux2deHXVXDwQM-CGVuncv-Vi_J-HqilASYBef-eik2o0fZgyLEtEYeo3eunVfxr4_X2sDErMvakSQvoIkAraZFXUM7-hfKzzt07pVSHjAFFtnhC8x8dv3CKJ-QGa11CqT5mcpMOj_5e_tTKxCsyMd6v4exn77k39rNrvXFXmI_HaFAMwqUlJlP3Gq7dzWO1YjjKj3CJE1y6nW6o7cR73Gjh8we7M-5sFSQcfF0Ck7kYWmJAB87E0Rh75LEkWH8L4_e3kuS5FbZDx9YvbontEH8dTVTp7PAb0wg"
}`

export const clusterProd = `{
  "host" : "https://workflow.dp.tech/",
  "s3_endpoint" : "60.205.112.9:9000",
  "k8s_api_server" : "https://182.92.168.135:6443",
  "token" : "eyJhbGciOiJSUzI1NiIsImtpZCI6Im05a2kzYm1TUEhHVWxoeTk1ZVExNHBrZnBhM3FYbVFHb3VMU2d3NzM1NUEifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJhcmdvIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImFyZ28tdG9rZW4tZGI0YmMiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiYXJnbyIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6ImVlNjkxY2ViLTY0OGQtNDM3MS1iNzU3LWU2ODA4ZDNlNTQ5MyIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDphcmdvOmFyZ28ifQ.l_kalyXoay8lJz_ULlCJbaXUMbVqvd1poWoreNzpQtyU6eF4PLQVP7zmKFZh6waosjtuhSvClHz1wFdi3FRvFvCdCda8t_tCxxCuqsLWSzlK0xmtlLijNzTDZKGwj2rcYMIvB92DIM3MvadjqtUiY7WEP5kdlBV9Etch705j_HV3cdzZivSsQi3ku6ftSGuua3IW2FJnZ01f7Ma2QJ0lkGHb9plvJuNiG0SWtg2mGDZj7oboASS0L-N7JttAXKW4k64h_qM0uaH48yc64XObfROlOSHUM9FLHBCsVobV29FSuQ5JT1l6ktO5ztamf4KH2VFh5syc9XLXp2de-AqPiA",
}`

export const bohriumConfig = `{
  "diskSize": 60,           // 磁盘大小
  "jobType": "container",   // container/ indicate
  "logFiles": [],           // 日志
  "nnode": 1,               // 超算配置: 节点数
  "platform": "ali",        // ali/ paratera(提交到并行)
  "projectId": 1234,        // 项目 id
  "region": "",             // 并行需要设置成 default
  "scassType": "c8_m16_cpu" // 机型
}`;

export const mixedSteps = `from dflow import (
  ShellOPTemplate,
  InputParameter,
  OutputParameter,
  InputArtifact,
  OutputArtifact,
  Workflow,
  Step
)
from dflow.plugins.bohrium import BohriumContext, BohriumExecutor

if __name__ == "__main__":
  brm_context = BohriumContext(
      executor="mixed",
      extra={}, # 全局bohrium配置
      username="你的用户名",
      password="你的密码"
  )

  hello = ShellOPTemplate(name='Hello',
          image="ubuntu:22.04",
          script="echo hello && echo Hello > /bar.txt && echo 1 > /result.txt")
  hello.outputs.parameters = {"msg": OutputParameter(value_from_path="/result.txt")}
  hello.outputs.artifacts = {"bar": OutputArtifact(path="/bar.txt")}

  duplicate = ShellOPTemplate(name='Duplicate',
              image="ubuntu:22.04",
              script="cat foo.txt foo.txt > bar.txt && echo $(({{inputs.parameters.msg}}*2)) > result.txt && echo ok && sleep 100")
  duplicate.inputs.parameters = {"msg": InputParameter()}
  duplicate.outputs.parameters = {"msg": OutputParameter(value_from_path="/result.txt")}
  duplicate.inputs.artifacts = {"foo": InputArtifact(path="/foo.txt")}
  duplicate.outputs.artifacts = {"bar": OutputArtifact(path="/bar.txt")}

  wf = Workflow(name="mixed-bohrium", context=brm_context, host="https://workflow.test.dp.tech/")
  hello0 = Step(name="local", template=hello)
  wf.add(hello0)
  hello1 = Step(name="bohrium", template=duplicate, parameters={"msg": hello0.outputs.parameters["msg"]}, artifacts={"foo": hello0.outputs.artifacts["bar"]}, executor=BohriumExecutor(executor="bohrium_v2", extra={"scassType":"c2_m4_cpu","projectId": 你的项目id, "jobType":"container", "logFiles": []}))
  wf.add(hello1)
  wf.submit([])`;

export const dflowSteps2D = `from dflow import (
  ShellOPTemplate,
  InputParameter,
  Workflow,
  Step,
  Steps
)

if __name__ == "__main__":
  hello = ShellOPTemplate(name='Hello',
          image="ubuntu:22.04",
          script="echo $(({{inputs.parameters.msg}}*2))")
  hello.inputs.parameters = {"msg": InputParameter()}
  duplicate = ShellOPTemplate(name='Duplicate',
              image="ubuntu:22.04",
              script="echo abc")

  hello0 = Step(name="a", template=hello, with_param=[1,2,3], parameters={"msg": "{{item}}"}, parallelism=2)
  hello1 = Step(name="b", template=duplicate)

  wf = Workflow(name="workflow-steps-2d", host="https://workflow.dp.tech")

  steps = []
  steps.append(hello0)
  steps.append(hello1)
  
  start = Steps("start", steps=steps)
  start.inputs.parameters = {"split_to_many_parameters": InputParameter()}
  # 拆分成5个steps，每个steps可以继续拆分。最大同时运行3个，第4个开始排队
  all = Step(name="all", template=start, with_param=[1,2,3,4,5], parameters={"split_to_many_parameters": "{{item}}"}, parallelism=3)
  wf.add(all)
  wf.submit([])
`;