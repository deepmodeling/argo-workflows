import {Page} from 'argo-ui';
import * as React from 'react';
import {useCollectEvent} from '../../shared/components/use-collect-event';
import {bohriumConfig, clusterTest, clusterProd, dflowSteps2D, mixedSteps} from './const';

require('./help.scss');

export const Help = () => {
    useCollectEvent('openedHelp');
    return (
        <Page title='Help'>
            <div className='row'>
                <div className='columns'>
                    <div className='help-box'>
                        <h2>Help</h2>
                        <h3>Workflow Information</h3>
                        <div className='info-box'>
                            <div className='info-keys'>
                                <div className='info-key'>argo version:</div>
                                <div className='info-key'>workflow branch:</div>
                                <div className='info-key'>go SDK version:</div>
                            </div>
                            <div className='info-values'>
                                <div className='info-value'>v3.4.1</div>
                                <div className='info-value'>dp-v3.4.1</div>
                                <div className='info-value'>v0.2.7</div>
                            </div>
                        </div>
                        <h3>Cluster Info</h3>
                        <strong>- Cluster: Test</strong>
                        <div className='info-box cluster-box'>
                            <div className='info-keys'>
                                <div className='info-key'>页面地址:</div>
                                <div className='info-key'>minio地址:</div>
                                <div className='info-key'>计算节点:</div>
                                <div className='info-key'>dflow/dpgen2配置:</div>
                            </div>
                            <div className='info-values'>
                                <div className='info-value'>
                                    <a href='https://workflow.test.dp.tech/'>https://workflow.test.dp.tech/</a>
                                </div>
                                <div className='info-value'>
                                    <a href='https://minio-workflow.test.dp.tech/'>https://minio-workflow.test.dp.tech/</a>
                                </div>
                                <div className='info-value'>6 * c8_m16_cpu</div>
                                <pre className='dflow-config'>
                                    <code>{clusterTest}</code>
                                </pre>
                            </div>
                        </div>
                        <br />
                        <strong>- Cluster: Prod</strong>
                        <div className='info-box cluster-box'>
                            <div className='info-keys'>
                                <div className='info-key'>页面地址:</div>
                                <div className='info-key'>minio地址:</div>
                                <div className='info-key'>计算节点:</div>
                                <div className='info-key'>dflow/dpgen2配置:</div>
                            </div>
                            <div className='info-values'>
                                <div className='info-value'>
                                    <a href='https://workflow.dp.tech/'>https://workflow.dp.tech/</a>
                                </div>
                                <div className='info-value'>
                                    <a href='https://minio-workflow.dp.tech/'>https://minio-workflow.dp.tech/</a>
                                </div>
                                <div className='info-value'>3 * c8_m16_cpu + 2 * c12_m24_cpu + 1 * c16_m32_cpu + 2 * c32_m64_cpu</div>
                                <pre className='dflow-config'>
                                    <code>{clusterProd}</code>
                                </pre>
                            </div>
                        </div>
                        <h3>提示</h3>
                        <div>
                            Bohrium参数: 任务类型 <strong>job_type</strong>, container表示容器类型任务，indicate表示ecs镜像任务，ecs镜像会在bohrium上逐渐淘汰。
                            <br /> Bohrium参数: 机型 <strong>scassType</strong>, 'c8_m16_cpu', 'c12_m92_1 * NVIDIA V100'等，具体可以到Bohrium上价格计算器查询
                            <br /> Bohrium参数: 平台 <strong>platform</strong>, ali表示阿里云容器，paratera表示并行超算
                            <br /> Bohrium参数: 项目id <strong>projectId</strong>, 表示用来建立预算的项目ID
                            <br />
                            提示：<strong>不再</strong>需要 template_cover_cmd_escape_bug
                        </div>
                        <h3>dflow 示例: 混合工作流，第一步在本地，第二步在bohrium(ali)</h3>
                        <pre>
                            <code>{mixedSteps}</code>
                        </pre>
                        <h3>dflow 示例: 多次拆分出并行steps</h3>
                        <pre>
                            <code>{dflowSteps2D}</code>
                        </pre>
                        <h3>Bohrium 配置</h3>
                        <pre>
                            <code>{bohriumConfig}</code>
                        </pre>
                        <h3>Argo 文档</h3>
                        <a className='doc-link' href='https://argoproj.github.io/argo-workflows' target='_blank'>
                            https://argoproj.github.io/argo-workflows
                        </a>
                    </div>
                </div>
            </div>
        </Page>
    );
};
