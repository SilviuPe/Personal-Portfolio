
import redirectIcon from '@assets/icons/redirectIconUp.png';
import type { FetchProjectsDataStackItemI } from '@api/Projects/types';
import type { ExpandedProjectBoxComponentPropsI } from './types';
import './style.css';

const ExpandedProjectBoxComponent = (props: ExpandedProjectBoxComponentPropsI) => {
    const { data, callbackMinimizeEvent } = props;
    const { workflow_url, project_name, description,stack, repo_url } = data;
    return (
        <div className={'expanded-project-box-component-container'}>
            <div className={'expanded-project-box-content'}>
                <div className={'mc-book-options'}>
                    <div className={'red'} onClick={(e) => {
                        e.stopPropagation();
                        callbackMinimizeEvent()
                    }}>
                        <div className={'circle'}>
                            <img src={redirectIcon} alt={'repo'}/>
                        </div>
                        back
                    </div>
                </div>
                <div className={'expanded-project-box-image-workflow-container'}>
                    <img src={workflow_url} alt={'workflow'} width={440} height={400}/>
                </div>
                <div className={'expanded-project-box-details-container'}>
                    <div className={'expanded-project-box-details-content'}>
                        <div className={'expanded-project-box-title-description'}>
                            <p className={'title'}>{project_name}</p>
                            <p className={'description'}>{description}</p>
                        </div>
                        <div className={'expanded-project-box-stack'}>
                            <p className={'title'}>STACK</p>
                            <ul>
                                {stack.map((item: FetchProjectsDataStackItemI) => (
                                    <li className={'list-item'}>
                                        <p>{item.title}: {item.value}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={'expanded-project-box-repo-button-redirect'}>
                            <button onClick={() => {
                                window.open(repo_url);
                            }}><p>view repo</p> <img src={redirectIcon} alt={'repo'} width={12} height={12}/></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export { ExpandedProjectBoxComponent };